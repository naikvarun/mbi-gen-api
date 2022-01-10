const express = require("express");
const cors = require("cors");
const appRouter = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(appRouter);
app.get("/", (req, res) => {
  res.send({ health: "OK" });
});

app.use((err, req, res, next) => {
  res.status(400).send({ message: err.message });
});

module.exports = app;
