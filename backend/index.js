const express = require("express");
const app = express();
const dotenv = require("dotenv").config(); // to use.env file for environment variables.
const port = process.env.PORT;
const cors = require("cors");
app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
app.listen(port || 5000);
