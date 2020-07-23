const express = require('express');
const sensorRouter = express.Router();

const Sensor = require('../models/sensor.model')

//Get all sensor feeds
sensorRouter.get('/', (req,res,next) => {
    Sensor.find(function(err,result){
        if(err){
            res.status(400).send({'error': err.message})
        }
        res.status(200).send({'data':result})
    })
})

// Get a specific sensor feed
sensorRouter.get('/:id', (req,res,next) => {
    Sensor.findById(req.params.id,function(err,result){
        if(err){
            res.status(400).send({'error': err.message})
        }
        res.status(200).send({'data':result})
    })
})

//Add a sensor feed
sensorRouter.post('/', (req,res,next) => {
    let newSensor = {
        place : req.body.place,
        temp: req.body.temp,
        humidity : req.body.humidity
    }

    Sensor.create(newSensor, function(err,result){
        if(err){
            res.status(400).send({'error': err.message})
        }
        res.status(200).send({'data':result})
    })
})

// Edit a Sensor feed
sensorRouter.patch("/:id", (req, res, next) => {
    let fieldsToUpdate = req.body;
    Sensor.findByIdAndUpdate(req.params.id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
        if(err){
            res.status(400).send({'error': err.message});
        }
        res.status(200).send({'data': result, 'message': "sensor feed updated successfully"});
    });
  });

  /* Delete Single sensor feed */
sensorRouter.delete("/:id", (req, res, next) => {
    Sensor.findByIdAndDelete(req.params.id, function(err, result){
        if(err){
          res.status(400).send({'error': err.message});
        }
      res.status(200).send({ 'data': result, 'message': "sensor feed deleted successfully"});
    });
  });


  module.exports = sensorRouter;

