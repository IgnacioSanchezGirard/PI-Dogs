const { Router } = require("express");
const { Temper } = require("../db");
const router = Router();

router.get("/", async (req, res) => {
    try {
      const dogTemp = await Temper.findAll();
      res.status(200).send(dogTemp);
    } catch (error) {
      res.status(404).send("temperament not found")
    }
    console.log(Temper);
  });

  module.exports = router;