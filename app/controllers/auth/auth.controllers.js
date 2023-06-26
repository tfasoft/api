import { User, Service, Admin, Request } from "$app/models/index.js";
import { ray } from "$app/functions/index.js";
import { request } from "express";
import axios from "axios";
// import { redis } from "$app/connections/index.js";

export const REQUEST = async (req, res) => {
  const data = req.body;

  try {
    const request = await Request.create(data);

    res.status(200).send({
      trackingCode: request._id,
      url: `https://t.me/tfasoft_test_bot?start=${request._id}`,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const FETCH = async (req, res) => {
  const { id } = req.params;

  try {
    const request = await Request.findById(id)
      .populate({
        path: "admin",
        model: Admin,
        select: "companyName",
      })
      .populate({
        path: "service",
        model: Service,
        select: "name",
      });

    if (!request) {
      return res.status(404).send({ message: "Request not found" });
    }

    res.status(200).send(request);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

export const VERIFY = async (req, res) => {
  const { verified, user, request: rid } = req.body;

  try {
    const request = await Request.findById(rid);

    if (!request) {
      return res.status(404).send({ message: "Request not found" });
    }

    const { _id: uid } = await User.findOne({ tid: user });

    try {
      await Request.findByIdAndUpdate(rid, {
        $set: { status: verified ? "verified" : "unverified", user: uid },
      });

      await axios.post(request.callbackUrl, {
        user,
        resCode: verified ? 0 : 1,
      });

      return res.status(200).send({ message: "Ok" });
    } catch (error) {
      return res.status(500).send({ message: error.message });
    }
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
