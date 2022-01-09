const { Router } = require("express");
const mbiRouter = require("./mbi-routes");

const appRouter = Router();

appRouter.use("/mbi", mbiRouter);

module.exports = appRouter;
