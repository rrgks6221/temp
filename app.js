"use strict";

const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const view = require("./src/apis/view");
const root = require("./src/apis/root");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", view);
app.use("/", root);

module.exports = app;