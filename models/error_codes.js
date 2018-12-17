"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const cuid = require("cuid");

const ErrorCodesSchema = Schema({
  _id: { type: "String", required: true, default: cuid },
  error: String,
  statusCode: String,
  description: String,
  status: { type: String, enum: ["enabled", "disabled"] },
  created: { type: Date, defaul: Date.now() },
  modified: Date
});

ErrorCodesSchema.pre("save", function(next) {
  if (!this.isModified()) {
    this.modified = Date.now();
    return next();
  }
  TODO: 
  // ### remplaza el _id mongo ###
  // if (this._id != null) {
  //   this._id = this.error;
  // }
  return next();
});

module.exports = mongoose.model("error_codes", ErrorCodesSchema);
