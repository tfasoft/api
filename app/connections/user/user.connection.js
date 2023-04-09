import mongoose from "mongoose";

import { databaseConfig } from "$app/config/index.js";

const { user } = databaseConfig;

const url = `mongodb://${user.host}:${user.port}/${user.collection}`;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to user db.");
  }
});

export default connection;
