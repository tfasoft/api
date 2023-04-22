/*
    Controllers: Authentication
    Controller: Authentication
*/

import { Service, Admin, User, Log } from "$app/models/index.js";
import { botConfig } from "$app/config/index.js";

import axios from "axios";

export const ACCESS = async (req, res) => {
  const { access_token, user_token } = req.body;

  try {
    const serviceResult = await Service.findOne({
      accessToken: access_token,
    });

    if (!serviceResult) {
      res.status(401).send({
        message: "Access token is not valid",
      });
    } else {
      const adminResult = await Admin.findById(serviceResult.owner);

      if (adminResult.active) {
        if (adminResult.credits >= 10) {
          try {
            const userResult = await User.findOneAndUpdate(
              { token: user_token },
              { token: null }
            ).select("-password -__v -createdAt -updatedAt");

            if (!userResult) {
              res.status(401).send({
                message: "User authentication token is not valid",
              });
            } else {
              const url = `https://api.telegram.org/bot${botConfig.token}/sendMessage`;

              const messages = [
                "New login detected! 🔍\n",
                `Application: ${serviceResult.name}`,
                `Provider: ${adminResult.companyName}`,
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

              res.status(200).send(userResult);
            }
          } catch (error) {
            res.status(500).send({ message: error.message });
          }
        } else {
          res.status(401).send({
            message: "You don't have enoght credits",
          });
        }
      } else {
        res.status(401).send({
          message: "Admin account is not active",
        });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
