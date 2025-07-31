const { Router } = require("express");
const newMessageRouter = Router();

const { messages } = require("./indexRouter")

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.post("/", (req, res) => {
  messages.push({ text: req.body.message, user: req.body.username, added: new Date() });
  res.redirect("/");
});

module.exports = newMessageRouter;
