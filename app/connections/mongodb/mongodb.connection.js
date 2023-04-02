import mongoose from "mongoose";

import { databaseConfig } from "@/config";

const { mongodb } = databaseConfig;

const url = `mongodb://${mongodb.host}:${mongodb.port}/${mongodb.collection}`;

const connection = mongoose.createConnection(url, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Connected to mongodb.");
  }
});

export default connection;
