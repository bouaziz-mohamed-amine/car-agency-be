const user= require('../models/user').model
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');





exports.create= async( req,res)=>{

   const userRegister =req.body ;
   
    let oldUser = await user.findOne({email : userRegister.email})  
       if(oldUser)  
             res.status(409).json("User Already Exist. Please Login");
       //Encrypt user password
       else {
         userRegister.password = await bcrypt.hash(userRegister.password, 10);
          //kjhhggftfgjnmkl23155,bvvhgvhg
    let newUser = new user({
        ...userRegister
    })
   
     newUser.save().then(data=>{
        res.json(data)
     //})
     }).catch(err =>{
        res.json({error : " server  error"})
     })
       }


}

exports.login= async(req,res)=>{

   let userLogin= req.body
   let appUser = await user.findOne({email : userLogin.email})  
       if (appUser)  {
         let match = await bcrypt.compare(userLogin.password, appUser.password)
      if(match){
          let token = await jwt.sign({email :appUser.email},"PrivateKey",{expiresIn: '1h'})
         res.json({
            user : appUser,
            token : token
         })
      }
      else {
         res.status(404).send({ message: "Not found user with this password " });
      }
   }else {
      res.status(404).send({ message: "Not found user with this email" });
   }
   }

exports.find=(req,res)=>{
    user.find({}).then(doc =>{
     res.json(doc)
    })
 }


