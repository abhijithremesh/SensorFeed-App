const mongoose = require('mongoose')
const sensorSchema = new mongoose.Schema({
    place: {
        type:String,
        required: true
    },
    temp:{
        type:String,
        required: true
    },
    humidity:{
        type:String,
        required: true
    }
});

const Sensor = mongoose.model("Sensor",sensorSchema);
module.exports = Sensor;

