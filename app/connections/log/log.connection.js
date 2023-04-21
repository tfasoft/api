import mongoose from "mongoose";

import { databaseConfig } from "$app/config/index.js";

const { log } = databaseConfig;

// const url = `mongodb://${log.host}:${log.port}/${log.collection}`;
const url = log.atlas;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to log db.");
  }
});

export default connection;
