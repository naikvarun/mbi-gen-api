const { Router } = require("express");

const mbiRouter = Router();

mbiRouter.get("/generate", async (req, res) => {
  res.send({ mbi: "abc" });
});

module.exports = mbiRouter;
