// import express from "express";
// import morgan from "morgan";
// import path from "path";


const express = require("express");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

const router = require("./api");

// const cors = require("cors");


// import router from "./api";
// import {
//   configuredHelmet,
//   httpsOnly,
//   logErrors,
//   pushStateRouting,
// } from "./middleware";
const {
  configuredHelmet,
  httpsOnly,
  logErrors,
  pushStateRouting,
} = require("./middleware");

const apiRoot = "/api";
// const staticDir = path.join(__dirname, "static");
const staticDir = path.join(__dirname, "../client");

const app = express();

app.use(cors());
app.use(express.json());
app.use(configuredHelmet());
app.use(logErrors());
app.use(morgan("dev"));

if (app.get("env") === "production") {
  app.enable("trust proxy");
  app.use(httpsOnly());
}

app.use(apiRoot, router);

app.use(express.static(staticDir));
app.use(pushStateRouting(apiRoot, staticDir));

// export default app;
module.exports = app;