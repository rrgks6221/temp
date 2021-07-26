"use strict";

const express = require("express");
const app = express();

const view = require("./src/apis/view");
const root = require("./src/apis/root");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", view);

module.exports = app;