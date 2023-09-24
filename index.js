require('dotenv').config();

const express = require("express");
const app = express();

// adding default port
const port = process.env.PORT || 8000;

// starting server
app.listen(port, () => {
    console.log(`App running on ${port} successfully !`);
});