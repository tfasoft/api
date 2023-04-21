/*
    Controllers: Authentication
    Controller: Authentication
*/

import { Admin, User } from "$app/models/index.js";

export const ACCESS = async (req, res) => {
  const { access_token, user_token } = req.body;

  try {
    const adminResult = await Admin.findOne({
      access_token,
    });

    if (!adminResult) {
      res.status(401).send({
        message: "Admin access token is not valid",
      });
    } else {
      if (adminResult.active) {
        if (adminResult.credits >= 10) {
          try {
            const user_result = await User.findOneAndUpdate(
              { token: user_token },
              { token: null }
            ).select("-password -__v -createdAt -updatedAt");

            if (!user_result) {
              res.status(401).send({
                message: "User authentication token is not valid",
              });
            } else {
              await Admin.findByIdAndUpdate(adminResult._id, {
                $inc: { credits: -10 },
              });

              res.status(200).send(user_result);
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
