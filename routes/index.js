const app = require("express").Router();

const apiRouter = require("./routes.api");
const uiRouter = require("./routes.ui");


app.use("/api/v1", apiRouter);
app.use("/", uiRouter);


module.exports = app;
