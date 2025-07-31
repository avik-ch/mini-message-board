const { Router } = require("express");
const newMessageRouter = Router();

const { addMessage } = require("../controllers/messageController");

newMessageRouter.get("/", (req, res) => {
  res.render("form");
});

newMessageRouter.post("/", (req, res) => {
  addMessage(req.body.username, req.body.message, req, res);
});

module.exports = newMessageRouter;
