const mongoose= require('mongoose')
const { Schema } = mongoose;

const bookingSchema = new Schema({
    firstDate: Date,
    lastDate: Date,
    from : String,
    return : String,
    phoneNumber : Number
   }) 

const booking=mongoose.model('booking',bookingSchema)

module.exports = booking