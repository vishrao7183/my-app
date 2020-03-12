let express=require('express')
let userProductRouter=express.Router()
let userProductController=require('../controller/userProductController.js')
var jwt =require('jsonwebtoken')
var verify = require("../verifyUser.js")

console.log("controller method")


// userProductRouter.use(function(request, response, next){
//     const token =request.headers["auth-token"];
//     console.log('token get product---------',token)
//     if (!token)  return response.status(401).send("access denied");

//     try{
//         console.log("hgjfghfhfhhg-------------------");
//         console.log("bhjhkjfhg---", process.env.TOKENs);
//         const verified = jwt.verify(token,process.env.TOKENs)

//         // check data in db and insert in req
        

        
//         request.user= verified;
//         // respons.send(verified)
//        next();
//     }catch (err){
//         console.log(err, "error in token verfication-----");
//         //res.send(err)
//         response.status(401).json({msg: 'token not verified', statusCode: 401})
//     }
// })


//user
userProductRouter.get('/getProduct',verify,userProductController.getProduct);

module.exports=userProductRouter;5