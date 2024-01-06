const express = require("express");
const path = require("path");

const PORT = 3000;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./IWant/doYouWant.html"));
});

app.get("/yes.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./IWant/yes.html"));
});

app.listen(PORT, () => {
  console.log(`Server is running on port : ${PORT}`);
});
