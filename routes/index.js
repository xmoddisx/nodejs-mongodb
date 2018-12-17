"use strict";

const express = require("express");
const crtlError = require("../controllers/error_codes");
const api = express.Router();

// ### CRUD ERROR CODES ###

api.get("/error_codes", crtlError.getErrorCodes);
api.get("/error_codes/all", crtlError.getErrorCodes);
//api.put("/error-codes",)

module.exports = api;
