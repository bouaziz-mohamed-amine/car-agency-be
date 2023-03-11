const mongoose= require('mongoose')
const { Schema } = mongoose;

const brandSchema = new Schema({
    name : String,
    cars : [{ type: Schema.Types.ObjectId, ref: 'car'}]
   }) 

const brand=mongoose.model('brand',brandSchema)

module.exports = brand 