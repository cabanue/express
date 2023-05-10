const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>Hello, world</h1>");
});

app.get("/contact", function (req, res) {
  res.send("Contact me at this email address");
});

app.get("/about", function (req, res) {
  res.send("I am a full stack development graduate from IUPUI. ");
});

app.get("/new", function (req, res) {
  res.send("new");
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
