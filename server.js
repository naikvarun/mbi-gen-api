const express = require("express");

const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send({ health: "OK" });
});

app.use((err, req, res, next) => {
  res.status(400).send({ message: err.message });
});

module.exports = app;
