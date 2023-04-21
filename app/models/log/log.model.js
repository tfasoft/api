import { log } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
    company: {
      type: Schema.Types.ObjectId,
      ref: "Admin",
    },
    servive: {
      type: Schema.Types.ObjectId,
      ref: "Service",
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

export default log.model("Log", schema);
