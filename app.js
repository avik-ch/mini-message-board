require('dotenv').config();
const express = require('express');
const indexRouter = require('./routes/indexRouter');


const app = express();

// listen
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App is live. Listening on port ${PORT}.`);
});

app.use('/', indexRouter);
