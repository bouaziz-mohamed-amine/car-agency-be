const mongoose= require('mongoose')
const { Schema } = mongoose;

const carSchema = new Schema({
    name : String,
   }) 

const car=mongoose.model('car',carSchema)

module.exports = car