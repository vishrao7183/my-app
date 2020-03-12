let express=require('express')
let router=express.Router()
let userController=require('../controller/userController.js')


//user
router.post('/userSignUp', userController.userSignUp);
router.post('/userLogin', userController.userLogin);
//admin
router.post('/adminSignUp', userController.adminSignUp);
router.post('/adminLogin', userController.adminLogin);
module.exports=router;