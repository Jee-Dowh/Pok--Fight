const express = require("express");
const router = express.Router();
const attaqueselementaires = require("../services/attaqueselementaires.js");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await attaqueselementaires.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting attaqueselementaires`, err.message);
    next(err);
  }
});

module.exports = router;
