const { Router } = require("express");
const messageRouter = Router();

const { getMessageById } = require("../controllers/messageController");

messageRouter.get("/", (req, res) => {
  res.redirect("/");
});

messageRouter.get("/:messageId", getMessageById);

module.exports = messageRouter;
