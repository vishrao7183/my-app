var express=require('express');
var bodyParser=require('body-Parser');
var app=express();
app.use(bodyParser.json())
require('./dbconnection')
//require("dotenv").config();
var router=require('./routes/userRoutes.js');
var adminProductRouter =require('./routes/adminProductRoutes');
var userProductRouter =require('./routes/userProductRoutes');
var admincategoryRouter =require('./routes/admincategoryRoutes');
var userCartRouter =require('./routes/userCartRoutes');
const swaggerUi = require ('swagger-ui-express');
const swaggerDocument = require('./swagger.json')
app.use("/api", router,adminProductRouter,userProductRouter,admincategoryRouter,userCartRouter);
{
    console.log("done done")
}
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));
app.listen(4477)
console.log("server runnin on port number 4477")