"use strict";

const fse = require("fs-extra");
const db = JSON.parse(fse.readFileSync("./src/db/db.json"));

console.log(db);

const calendarTodolist = {
    read: (req, res) => {
        const date = req.params.date;
    },
    create: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    },
};

module.exports = calendarTodolist;