import { admin } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    access_token: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    service_type: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default admin.model("Admin", schema);
