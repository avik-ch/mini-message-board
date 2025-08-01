require("dotenv").config();
const express = require("express");
const path = require("node:path");
const { indexRouter } = require("./routes/indexRouter");
const newMessageRouter = require("./routes/newMessageRouter");
const messageRouter = require("./routes/messageRouter");

const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App is live. Listening on port ${PORT}.`);
});

// routes
app.use("/", indexRouter);
app.use("/new", newMessageRouter);
app.use("/message", messageRouter);
