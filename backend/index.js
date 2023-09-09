const express = require("express");
const app = express();
const dotenv = require("dotenv").config(); // to use.env file for environment variables.
const port = process.env.PORT;
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDb = require("./config/dbConnection");
const postRoute = require("./routers/postRoute");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(cors());

app.use("/", postRoute);

app.all("/", (req, res) => {
  console.log("Just got a request!");
  res.send("Yo!");
});
connectDb();
app.listen(port || 5000);
