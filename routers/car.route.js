const express = require('express')
const route = express.Router()
const carController = require('../controllers/car.controller')
const auth = require('../middleware/auth')

route.use(express.urlencoded({extended :true}))
route.use(express.json())


route.post("/",auth,carController.create);
route.get("/:id",carController.find);


module.exports=route