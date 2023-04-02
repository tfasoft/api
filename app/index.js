import express from "express";
import cors from "cors";

import { appConfig } from "@/config";
import { log } from "@/middlewares";

const app = express();

app.set("json spaces", 2);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("*", log, (req, res) =>
  res.status(404).send({
    url: req.originalUrl,
    method: req.method,
    message: "Page not found",
    version: appConfig.version,
  })
);

export default app;
