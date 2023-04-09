/*
    Controllers: User
    Controller: User
*/

import { User } from "$app/models/index.js";

export const SINGLE = async (req, res) => {
  const { tid } = req.params;

  try {
    const user = await User.findOne({ tid });

    if (user) {
      res.status(200).send(user);
    } else {
      res.status(401).send({ message: "You are not registered." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
