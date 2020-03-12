let express=require('express')
let adminCategoryRouter=express.Router()
let adminCategoryController=require('../controller/adminCategoryController.js')
var jwt =require('jsonwebtoken')
var verifyAdmin=require("../verifyAdmin.js")

adminCategoryRouter.get('/viewcategory',verifyAdmin, adminCategoryController.view);


// adminCategoryRouter.use(function(req, respons, next){
//     const token =req.headers["auth-token"];
//     console.log('token',token)
//     if (!token)  return respons.status(401).send("access denied");

//     try{
//         console.log("hgjfghfhfhhg");
//         const verified = jwt.verify(token,process.env.TOKEN_SECRET)

//         // check data in db and insert in req
        

        
//         req.user= verified;
//        // respons.send(verified)
//           next();
//     }catch (err){
//         console.log(err)
//         //res.send(err)
//         respons.status(401).json({token:'token not verified'})
//     }
// })
//admin
adminCategoryRouter.post('/postcategory', verifyAdmin,adminCategoryController.postCategory);
adminCategoryRouter.post('/updatecategory',verifyAdmin, adminCategoryController.updateCategory);
adminCategoryRouter.post('/deletecategory',verifyAdmin, adminCategoryController.deleteCategory);



 //admin
// router.post('/adminSignUp', userController.adminSignUp);
// router.post('/adminLogin', userController.adminLogin);
module.exports=adminCategoryRouter;