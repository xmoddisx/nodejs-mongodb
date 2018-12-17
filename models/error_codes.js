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
    if (this._id != null) {
      this._id = this.error;
    }
    return next();
  }
  this.modified = Date.now();
});

module.exports = mongoose.model("ErrorCodes", ErrorCodesSchema);
