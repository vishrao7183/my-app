// import mongoose
var mongoose = require('mongoose')
// connect mongoose
mongoose.connect('mongodb://localhost:27017/cart',{ useNewUrlParser: true , useUnifiedTopology: true})
mongoose.connection.on('connected',()=>{
    console.log('connected to database at this port')
})
mongoose.connection.on('error',(err)=>{
    if(err)
    {
        console.log('error in database connection')
    }
    
})