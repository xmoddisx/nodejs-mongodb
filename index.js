"use strict";

const  moongose = require('mongoose')
const app = require('./app')
const config = require('./config')

moongose.connect(
  config.db,
  config.dbopts,
  function(err) {
    if (err) {
      return console.log(`MONGO - coneection error: ${err}`);
    }
    console.log("MONGO - connection succeeded!");
    //NODE MIDDLEWARE SERVER
    app.listen(config.port, err => {
      if (err) {
        console.log(`API error listen`);
      }
      console.log(`API REST corriendo en https://localhost:${config.port}`);
    });
  }
);
