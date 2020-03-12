let express=require('express')
let productRouter=express.Router()
let productController=require('../controller/adminProductController.js')
var multer=require('multer')
varverifyAdmin = require('../verifyAdmin.js')

console.log("controller method")


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
});
var upload = multer({ storage: storage })

productRouter.post('/postProduct',upload.single('productImage'),varverifyAdmin,productController.postProduct);


// productRouter.use(function(req, respons, next){
//     const token =req.headers["auth-token"];
//    // console.log('token',token)
//     if (!token)  return respons.status(401).send("access denied");

//     try{
//       //console.log("hgjfghfhfhhghkghgkhjkghgyub");
//         const verified = jwt.verify(token,process.env.TOKEN_SECRET)

//         // check data in db and insert in req

//         console.log("verified----", verified)
        

        
//         req.user= verified;
//         // respons.send(verified)
//           next();
//     }catch (err){
//         console.log(err,  "ghjjkltyyuuuuuu ioppppppppp--------");
//         //res.send(err)
//         respons.status(401).json({msg: 'token not verified'})
//     }
// })


//user

productRouter.post('/updateProduct',varverifyAdmin, productController.updateProduct);
productRouter.post('/deleteProduct',varverifyAdmin, productController.deleteProduct);
productRouter.get('/viewProduct',varverifyAdmin, productController.viewProduct);

// productRouter.post('/uploadImage', productController.uploadImage);
 //admin
// router.post('/adminSignUp', userController.adminSignUp);
// router.post('/adminLogin', userController.adminLogin);
module.exports=productRouter;