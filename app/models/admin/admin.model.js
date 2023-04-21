import { admin } from "$app/connections/index.js";

import mongoose from "mongoose";

const { Schema } = mongoose;

const schema = Schema(
  {
    access_token: {
      type: String,
      required: true,
      unique: true,
      default: "",
    },
    name: {
      type: String,
      required: true,
      default: "",
    },
    username: {
      type: String,
      required: true,
      unique: true,
      default: "",
    },
    password: {
      type: String,
      required: true,
      default: "",
    },
    email: {
      type: String,
      required: true,
      default: "",
    },
    phoneNumber: {
      type: String,
      required: true,
      default: "",
    },
    service_type: {
      type: String,
      required: true,
      default: "beta",
    },
    credits: {
      type: Number,
      default: 100,
    },
    activate_token: {
      type: String,
      default: "",
    },
    active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default admin.model("Admin", schema);
