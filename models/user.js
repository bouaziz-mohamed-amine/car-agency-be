const mongoose= require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    name : String,
    email : {type : String,  unique: true},
    password : String , 
   }) 

const user=mongoose.model('user',userSchema)

module.exports ={

    schema : userSchema,
    model : user
}