const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.send("new message page");
});

module.exports = newMessageRouter;
