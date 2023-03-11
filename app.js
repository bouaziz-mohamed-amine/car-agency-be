
const express = require('express')
const app = express()
const mongoose = require('mongoose');
require('dotenv').config()
var cors = require('cors')
mongoose.Promise = global.Promise;

const userRoute=require('./routers/user.route')
const carRoute=require('./routers/car.route')
const brandRoute=require('./routers/brand.route')


app.use(cors())

app.use('/user',userRoute)
app.use('/cars',carRoute)
app.use('/brands',brandRoute)



// connect to our dataBase  
mongoose
  .connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

app.listen(process.env.PORT, () => {
  console.log(` app listening on port ${process.env.PORT}`)
})
