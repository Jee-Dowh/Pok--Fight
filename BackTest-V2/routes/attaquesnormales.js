const express = require("express");
const router = express.Router();
const attaquesnormales = require("../services/attaquesnormales.js");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await attaquesnormales.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting attaquesnormales`, err.message);
    next(err);
  }
});

module.exports = router;
