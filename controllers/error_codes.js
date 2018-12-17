'use strict'

const ErrorCodes = require('../models/error_codes')

//GET ALL ERROR CODES
function getErrorCodes(req,res){
    console.log(`GET /api/error-codes:id`);
    let id = req.params.id
    ErrorCodes.findById(id,(err,errorCodes)=>{
        if(err){
            return res.status(500).send({message:`ERROR Request: ${err}`})
        }
        if (!errorCodes) {
            return res.status(404).send({ message: `Error-Codes no found` });
          }
          res.status(200).send({ errorCodes });
    })
}

//GET ERROR CODES by ID
function getErrorCodes(req,res){
    console.log(`GET //api/error-codes/all`);
    ErrorCodes.find({}, (err, errorCodes) => {
      if (err) {
        return res.status(500).send({ message: `ERROR Request: ${err}` });
      }
      if (!errorCodes) {
        return res.status(404).send({ message: `Error-Codes no found` });
      }
      res.status(200).send({ errorCodes });
    });
}

//POST SAVE ERROR CODES
function saveErrorCodes(req,res){}

module.exports = {
    getErrorCodes,
    getErrorCodes
}