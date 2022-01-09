const { Router } = require("express");
const { generateMBI, verifyMBI } = require("../service/mbi-service");

const mbiRouter = Router();

mbiRouter.get("/generate", async (req, res) => {
  res.send({ mbi: generateMBI() });
});

mbiRouter.post("/verify", async (req, res, next) => {
  const { mbi } = req.body;
  try {
    if (!mbi) {
      throw Error("MBI not present");
    }
    const isValid = verifyMBI(mbi);
    res.send({ mbi, isValid });
  } catch (err) {
    next(err);
  }
});

module.exports = mbiRouter;
