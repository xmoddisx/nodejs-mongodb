'use strict'

const ErrorCodes = require('../models/error_codes')


//GET ERROR CODES by ID
function getErrorCodes(req,res){
    console.log(`GET /api/error_codes:id`);
    let id = req.params.id
    ErrorCodes.findById(id,(err,error_code)=>{
        if(err){
            return res.status(500).send({message:`ERROR Request: ${err}`})
        }
        if (!error_code) {
            return res.status(404).send({ message: `Error_Codes no found` });
          }
          res.status(200).send({ error_code });
    })
}

//GET ALL ERROR CODES
function getErrorCodes(req,res){
    console.log(`GET //api/error_codes/all`);
    ErrorCodes.find({}, (err, error_codes) => {
      if (err) {
        return res.status(500).send({ message: `ERROR Request: ${err}` });
      }
      if (!error_codes) {
        return res.status(404).send({ message: `Error_Codes no found` });
      }
      res.status(200).send({ error_codes });
    });
}

//POST SAVE ERROR CODES
function saveErrorCodes(req,res){
    console.log(`POST //api/error_codes/`);
    //REQUEST
    console.log(req.body)
    //CREATE MODEL
    let newError = new ErrorCodes();
    newError.error = req.body.error;
    newError.statusCode = req.body.statusCode;
    newError.description = req.body.description;
    newError.status = req.body.status;
    //SAVE
    newError.save((err,ErrorStored)=>{
        if (err) {
            res.status(500).send({ message: `MONGO - Error_Codes save error: ${err}` });
          }
          res.status(200).send({error_codes:ErrorStored})
    })
    
}

module.exports = {
    getErrorCodes,
    getErrorCodes,
    saveErrorCodes
}