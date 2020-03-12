let express=require('express')
let userCartRouter=express.Router()
let userCartController=require('../controller/userCartController.js')


//user
userCartRouter.post('/saveCart', userCartController.postCart);
userCartRouter.get('/viewCart', userCartController.viewCart);

module.exports=userCartRouter;