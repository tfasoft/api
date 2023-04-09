import { fileConfig } from "$app/config/index.js";

import fs from "fs";

const log = async (req, res, next) => {
  const { method, path } = req;

  const when = new Date().toLocaleString("Us-fa");
  const content = `${when} | ${method} ${path}`;

  const filePath = fileConfig.filePath;
  const fileName = fileConfig.fileName;
  const fileContent = `${content}\n`;

  console.log(content);

  try {
    fs.appendFileSync(filePath + fileName, fileContent);
  } catch (error) {
    console.log(error);
  }

  next();
};

export default log;
