const express = require('express');
require("dotenv").config();
require("./models/db");
const approuter = require("./routes/ids");
const app = express();

app.use(express.json());

app.use(approuter);

app.listen(3000, () => {
    console.log("listening!!");
  });
  app.get("/", (req, res) => {
    res.json({ success: true, message: "Back End Zone 🔥" });
  });
  app.get("/test", (req, res) => {
    res.send("please");
  });