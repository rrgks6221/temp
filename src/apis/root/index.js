"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./ctrl");

router.get("/:date", ctrl.read);
router.post("/:date", ctrl.create);
router.put("/:date", ctrl.update);
router.delete("/:date", ctrl.delete);

module.exports = router;