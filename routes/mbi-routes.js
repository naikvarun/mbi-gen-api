const { Router } = require("express");
const { generateMBI } = require("../service/mbi-service");

const mbiRouter = Router();

mbiRouter.get("/generate", async (req, res) => {
  res.send({ mbi: generateMBI() });
});

module.exports = mbiRouter;
