const express = require('express')
const route = express.Router()
const controller = require('../controllers/brand.controller')
const auth = require('../middleware/auth')

route.use(express.urlencoded({extended :true}))
route.use(express.json())


route.post("/",controller.create);
route.get("/:id",controller.find);
route.get("/",controller.getAll);
route.post("/:id",controller.update);
route.delete("/:id",controller.deleteOne)

module.exports=route