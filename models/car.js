const mongoose= require('mongoose')
const { Schema } = mongoose;

const carSchema = new Schema({
    name : String,
    description : String,
    images : [String],
    isAvailable : Boolean,
    reservedDates : [{ type: Date, default: Date.now },]
   }) 

const car=mongoose.model('car',carSchema)

module.exports = car