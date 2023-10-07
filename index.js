// Imports database config

const express = require("express");

const app = express();

app.use(express.json());
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:7006",
  })
);

// eslint-disable-next-line no-undef
module.exports = app;
