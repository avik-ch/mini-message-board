const db = require("../db");

async function getMessageById(req, res) {
  const { messageId } = req.params;

  const message = await db.getMessageById(Number(messageId));

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("message", { message });
}

async function addMessage(username, message, req, res) {
  const success = await db.addMessage(username, message);

  if (!success) {
    res.status(500).send("Internal server error");
  }

  res.redirect("/");
}

module.exports = { getMessageById, addMessage };
