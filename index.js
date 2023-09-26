require('dotenv').config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

//DB Connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

// adding default port
const port = process.env.PORT || 8000;

// starting server
app.listen(port, () => {
    console.log(`App running on ${port} successfully !`);
});