/*
    Controllers: User
    Controller: User
*/

import { Service, Admin, User, Log } from "$app/models/index.js";

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

export const MY_LOGS = async (req, res) => {
  const { id } = req.params;

  try {
    const logs = await Log.find({ tid: id })
      .populate({
        path: "service",
        model: Service,
        select: "name",
      })
      .populate({
        path: "company",
        model: Admin,
        select: "companyName",
      })
      .populate({
        path: "user",
        model: User,
        select: "tid",
      });

    if (logs) {
      res.status(200).send(logs);
    } else {
      res.status(401).send({ message: "You are not registered." });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
