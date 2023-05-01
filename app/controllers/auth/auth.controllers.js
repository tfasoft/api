import { User } from "$app/models/index.js";
import { ray } from "$app/functions/index.js";
import { redis } from "$app/connections/index.js";

export const LOGIN = async (req, res) => {
  const { tid } = req.body;

  const token = ray.gen(25);

  const first = token.substring(0, 5);
  const last = token.substring(token.length - 5);

  const key = first + last;

  try {
    const result = await User.findOne({ tid });

    if (result) {
      await redis.hset(key, { id: result._id, token });
      await redis.expire(key, 60);

      res.status(200).send({
        token,
      });
    } else {
      res.status(401).send({
        message: "You are not registered.\nPress register button to register.",
      });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const REGISTER = async (req, res) => {
  const { tid } = req.body;

  try {
    const userResult = await User.findOne({ tid });

    if (userResult) {
      res.status(400).send({
        message: "You are now a user and don't need a new registration.",
      });
    } else {
      try {
        const userData = {
          tid,
          mcode: ray.gen(25),
          token: ray.gen(25),
        };

        await User.create(userData);

        res.status(200).send({ message: "You are now registered!" });
      } catch (error) {
        res.status(500).send({
          message: error.message,
        });
      }
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
