const router = require("express").Router();
const { Router } = require("express");
const QRController = require("./qr.controller");

router.get("/", (req, res) => {
  res.send("hello this is qr homepage");
});

router.post("/", async (req, res, next) => {
  try {
    const { url } = req.body;
    if (!url) res.send({ message: "requried", status: 403 });
    const image = await QRController.createQR(url);
    res.json(image);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
