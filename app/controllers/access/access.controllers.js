/*
    Controllers: Authentication
    Controller: Authentication
*/

// 0: Service unavailable | 500
// 1: Provider access token is not valid | 401
// 2: User access token is not valid | 404
// 3: Provider doesn't have enoght credits | 403
// 4: Provider account is not active | 400
// 5: Service is not active | 400
// 6: IP not valid | 403

import { Service, Admin, User, Log } from "$app/models/index.js";
import { redis } from "$app/connections/index.js";
import { botConfig } from "$app/config/index.js";

import axios from "axios";

export const ACCESS = async (req, res) => {
  const { access_token, user_token: token } = req.body;

  const ip = req.headers["x-forwarded-for"];

  try {
    const serviceResult = await Service.findOne({
      accessToken: access_token,
    });

    console.log(serviceResult.ipLimit);

    if (!serviceResult) {
      res.status(401).send({
        resCode: 1,
        message: "Provider access token is not valid",
      });
    } else {
      if (serviceResult.ipLimit) {
        if (serviceResult.ipLimit !== ip) {
          return res.status(403).send({
            resCode: 6,
            message: "IP not valid",
          });
        }
      }

      const adminResult = await Admin.findById(serviceResult.owner);

      if (adminResult.active) {
        if (serviceResult.isActive) {
          if (adminResult.credits >= 10) {
            try {
              const first = token.substring(0, 5);
              const last = token.substring(token.length - 5);

              const key = first + last;

              const { id } = await redis.hgetall(key);

              const userResult = await User.findByIdAndUpdate(id, {
                token: null,
              }).select("-password -__v -createdAt -updatedAt");

              if (!userResult) {
                res.status(404).send({
                  resCode: 2,
                  message: "User access token is not valid",
                });
              } else {
                const url = `https://api.telegram.org/bot${botConfig.token}/sendMessage`;

                const messages = [
                  "New login detected! 🔍\n",
                  `Application: ${serviceResult.name}`,
                  `Provider: ${adminResult.companyName}\n`,
                  "If you was not that, check your active sessions that is there any other devices loged in to your account or not.\n",
                  "TFAsoft LLC",
                ];

                const data = {
                  user: userResult._id,
                  company: adminResult._id,
                  service: serviceResult._id,
                };

                await Admin.findByIdAndUpdate(adminResult._id, {
                  $inc: { credits: -10 },
                });

                await Log.create(data);

                await axios.post(url, {
                  chat_id: userResult.tid,
                  text: messages.join("\n"),
                });

                await redis.del(key);

                res.status(200).send(userResult);
              }
            } catch (error) {
              res.status(500).send({
                resCode: 0,
                message: "Service unavailable",
                error: error.message,
              });
            }
          } else {
            res.status(403).send({
              resCode: 3,
              message: "Provider doesn't have enoght credits",
            });
          }
        } else {
          res.status(400).send({
            resCode: 5,
            message: "Service is not active",
          });
        }
      } else {
        res.status(400).send({
          resCode: 4,
          message: "Provider account is not active",
        });
      }
    }
  } catch (error) {
    res.status(500).send({
      resCode: 0,
      message: "Service unavailable",
      error: error.message,
    });
  }
};
