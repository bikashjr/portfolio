const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("index", { data: "Hi bikash" });
});

module.exports = router;
