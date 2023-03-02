const car = require('../models/car')


exports.create= async( req,res)=>{

   const data =req.body;
    let newCar = new car({
        ...data
    })
   
     newCar.save().then(data=>{
        res.json(data)
     }).catch(err =>{
        res.json({error : " server  error"})
     })
       
    }


exports.find=(req,res)=>{
    car.findById(req.params.id)
    .then(doc =>{
     res.json(doc)
    })
 }


