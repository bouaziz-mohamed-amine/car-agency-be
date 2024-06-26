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
   
   car.find({}).populate('brand').then(data => {
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
exports.getByBrands = (req,res)=>{
    car.find({"brand" : {$in : ["640c63202474c919a669d0fb","6410d894d4d5e89f132ef071"]} }).then(data => {
        res.json(data)    
    }).catch(err => {
        console.log("Cannot find activities", err);
    })
 
 }

