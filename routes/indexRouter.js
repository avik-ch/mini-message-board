const { Router } = require("express");
const indexRouter = Router();

const { getAllMessages } = require("../db");

indexRouter.get("/", async (req, res) => {
  const messages = await getAllMessages();
  res.render("index", { messages });
});

module.exports = { indexRouter };
