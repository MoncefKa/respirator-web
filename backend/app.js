const express = require('express');
require("dotenv").config();
require("./models/db");
const app = express();
app.use(express.json());

app.listen(3001, () => {
    console.log("listening!!");
  });
  app.get("/", (req, res) => {
    res.json({ success: true, message: "Back End Zone 🔥" });
  });
  app.get("/test", (req, res) => {
    res.send("please");
  });