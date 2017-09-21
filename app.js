"use strict";
const express = require("express");
const app = express();

const hardware = require("./hardwareConnection");

app.get("/zapp", (req, res) => {
  hardware.zapp();
  res.json({status: "ok"});
});

app.listen(3000);
