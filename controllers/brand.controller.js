const brand = require('../models/brand')


exports.create= async( req,res)=>{

   const data =req.body;
    let newBrand = new brand({...data})

     newBrand.save().then(data=>{
        res.json(data)
     }).catch(err =>{
        res.json({error : " server  error"})
     })
       
    }
    
exports.find=(req,res)=>{
    brand.findById(req.params.id)
    .then(doc =>{
     res.json(doc)
    })
 }

exports.getAll = (req,res)=>{
   
   brand.find({}).populate('cars').then(data => {
       res.json(data)    
   }).catch(err => {
       console.log("Cannot find activities", err);
   })

}

exports.update = (req,res)=>{
   var id = req.params.id;
   var newitem =req.body;
   brand.findByIdAndUpdate(id,newitem,{new: true}).then( data =>{
       res.json(data);
   })
}

exports.deleteOne = (req,res)=>{
  
    brand.deleteOne({_id : req.params.id}).then(data => {
       res.json(data)    
   }).catch(err => {
       console.log("Cannot delete activity", err);
   })
}

exports.getByBrands = (req,res)=>{
    brand.find({name : {$in : ["ford"]} }).populate('cars').exec().then(data => {
        const cars=data.flatMap(brand =>brand.cars)
        res.json(cars)    
    }).catch(err => {
        console.log("Cannot find activities", err);
    })
 
 }


