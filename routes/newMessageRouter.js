const { Router } = require("express");
const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form", {});
});

newMessageRouter.post("/", (req, res) => {
    console.log(req.body.username);
    console.log(req.body.message);
});

module.exports = newMessageRouter;
