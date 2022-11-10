const http = require("http");

const express = require("express");

const app = express();

app.use("/", (req, res, next) => {
  res.send("<h1>hello</<h1>");
});

app.use("/add", (req, res, next) => {
  res.send("<h1>add</<h1>");
});

app.listen(3000);
