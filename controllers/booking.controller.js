const booking = require('../models/booking')


exports.create= async( req,res)=>{

   const data =req.body;
    let newBounking = new booking({...data})

    newBounking.save().then(data=>{
        res.json(data)
     }).catch(err =>{
        res.json({error : " server  error"})
     })
       
    }
    
exports.find=(req,res)=>{
    booking.findById(req.params.id)
    .then(doc =>{
     res.json(doc)
    })
 }

exports.getAll = (req,res)=>{
   
    booking.find({}).then(data => {
       res.json(data)    
   }).catch(err => {
       console.log("Cannot find activities", err);
   })

}

exports.update = (req,res)=>{
   var id = req.params.id;
   var newitem =req.body;
   booking.findByIdAndUpdate(id,newitem,{new: true}).then( data =>{
       res.json(data);
   })
}

exports.deleteOne = (req,res)=>{
  
    booking.deleteOne({_id : req.params.id}).then(data => {
       res.json(data)    
   }).catch(err => {
       console.log("Cannot delete activity", err);
   })
}



