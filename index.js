//modules
const express = require("express");
const morgan = require("morgan");
const indexRouter = require("./routes");

const app = express();
const PORT = 3333;

//midleware
// app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.json());
app.use(morgan("combined"));
app.use(express.static("public"));

//routes
app.use("/", indexRouter);

app.use((err, req, res, next) => {
  res.status(500).json({ msg: err.toString() || "Something went wrong.." });
});

app.listen(PORT, () => {
  console.log(`app is running on port ${PORT} `);
});
