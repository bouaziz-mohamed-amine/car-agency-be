const car = require('../models/car')


exports.create= async( req,res)=>{

   const data =req.body;
    let newCar = new car({...data})

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

exports.getAll = (req,res)=>{
   
   car.find({}).then(data => {
       res.json(data)    
   }).catch(err => {
       console.log("Cannot find activities", err);
   })

}

exports.update = (req,res)=>{
   var id = req.params.id;
   var newitem =req.body;
   car.findByIdAndUpdate(id,newitem,{new: true}).then( data =>{
       res.json(data);
   })
}

exports.deleteOne = (req,res)=>{
  
   activity.deleteOne({_id : req.params.id}).then(data => {
       res.json(data)    
   }).catch(err => {
       console.log("Cannot delete activity", err);
   })
}


