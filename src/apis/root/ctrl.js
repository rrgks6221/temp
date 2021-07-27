"use strict";

const db = require("../../db/db");
const crypto = require("crypto");

const calendarTodolist = {
    read: (req, res) => {
        const date = req.params.date;

        db.query(`select * from todolist where date='${date}'`,(err, data) => {
            console.log(data);
            if (err) throw err;
            return res.json(data);
        })
    },

    create: (req, res) => {
        const index = crypto.randomBytes(10).toString("hex");
        const name = req.body.name;
        const description = req.body.description;
        const date = req.params.date;
        console.log(date);

        db.query("INSERT INTO `calendar-todolist`.`todolist` (`index`, `name`, `description`, `date`) VALUES (?, ?, ?, ?);", [index, name, description, date], (err, data) => {
            if (err) throw err;
            return res.send(index);
        });
    },

    update: (req, res) => {
        const index = req.params.index;
        const name = req.body.name;
        const description = req.body.description;

        db.query("UPDATE `calendar-todolist`.`todolist` SET `name`=?, `description`=? WHERE `index`=?;", [name, description, index], (err, data) => {
            if (err) throw err;
            return res.send(index);
        })
    },

    delete: (req, res) => {
        const index = req.params.index;

        db.query("DELETE FROM `calendar-todolist`.`todolist` WHERE `index`=?;",[index], (err, data) => {
            if (err) throw err;
            return res.send(index);
        })
    },
};

module.exports = calendarTodolist;