const express = require('express')
const route = express.Router()

const userController = require('../controllers/user.controller')

route.use(express.urlencoded({extended :true}))
route.use(express.json())
const auth = require('../middleware/auth')


route.post("/",  userController.create );

route.get("/",auth,userController.find);

route.post("/login",userController.login)


module.exports=route
