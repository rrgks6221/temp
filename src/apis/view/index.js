"use strict";

const express = require("express");
const router = express.Router();
const db = require("../../db/db");

router.get("/", (req, res) => {
    db.query("select * from todolist", (err, data) => {
        if (err) throw err;
        return res.json(data);
    });
});

module.exports = router;