const router = require("express").Router();
const qrApiRoutes = require("../modules/qr/qr.api");

// const apiRouter=require("./")

router.get("/", (req, res) => {
  res.send("hello world");
});

// router.use("/api/v1", apiRouter);
// router.use("/", uiRouter);
// router.get("/qr",(req,res)=>{
//     res.send("qr is working");
// });
router.use("/qr", qrApiRoutes);
module.exports = router;
