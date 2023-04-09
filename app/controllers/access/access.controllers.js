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
          res.status(200).send(user_result);
        }
      } catch (error) {
        res.status(500).send({ message: error.message });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
