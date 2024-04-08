const express = require("express");
const router = express.Router();
const pokemons = require("../services/pokemons.js");

/* GET programming languages. */
router.get("/", async function (req, res, next) {
  try {
    res.json(await pokemons.getMultiple(req.query.page));
  } catch (err) {
    console.error(`Error while getting pokemons`, err.message);
    next(err);
  }
});

module.exports = router;
