import { log } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    admin: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
      default: "",
    },
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      default: "",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: "",
    },
    callbackUrl: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "created",
    },
  },
  {
    timestamps: true,
  }
);

export default log.model("Request", schema);
