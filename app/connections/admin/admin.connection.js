import mongoose from "mongoose";

import { databaseConfig } from "$app/config/index.js";

const { admin } = databaseConfig;

const url = `mongodb://${admin.host}:${admin.port}/${admin.collection}`;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to admin db.");
  }
});

export default connection;
