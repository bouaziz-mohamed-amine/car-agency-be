const express = require('express')
const route = express.Router()
const carController = require('../controllers/car.controller')
const auth = require('../middleware/auth')

route.use(express.urlencoded({extended :true}))
route.use(express.json())


route.post("/",carController.create);
route.get("/:id",carController.find);
route.get("/",carController.getAll);
route.post("/:id",carController.update);
route.delete("/:id",carController.deleteOne)

module.exports=route