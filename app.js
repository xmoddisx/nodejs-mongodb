"use strict";

const express = require('express')
const bodyParser = require('body-parser')
const api = require('./routes')

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/app",api);

module.exports = app;
