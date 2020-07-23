//DB 
require('./src/database')
const express = require('express')
const app = express()
const PORT = 8888

const bodyParser = require('body-parser')
const  sensorRouter = require('./src/routes/sensor.router')

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use('/sensors',sensorRouter)

app.get('/',(req,res) => {
    res.send("hello world")
})

app.listen(PORT,function(){
    console.log(`Server listening on ${PORT}`)
})