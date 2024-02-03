const express = require("express");
const path = require("path");
const app = express();

app.use("/", express.static(path.join(__dirname, "static", "Arohana")));

app.listen(3300, (req, ers) => {
  console.log("Listening");
});
