//require all require module
const joi = require('joi')
const user = require('../Model/userSchema')
const admin = require('../Model/adminSchema')
var bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken')

console.log("hello")


//user login and signUp 


function userSignUp(postData,respo){

    const schema=joi.object({
        firstName:joi.required(),
        emailId: joi.string().trim().email().required(),
        password:joi.required(),
        phoneNumber:joi.required(),
      })

      joi.validate(postData.body,schema,(err,data)=>{
        if(err)
        {
            console.log(err)
            respo.status(400).json({
                msg: 'an error occured',
                statusCode: 400
            })
        }

    else{
    postData.body.password = bcrypt.hashSync(postData.body.password,10)
    var newUser = new user(postData.body);
        // insert
     newUser.save((err,data)=>{
    if(err){
        // respo.send(err);
        respo.json({msg:'failed to add signup'});

    }else{
        respo.json({msg:'signup added successfully'});
    }

})
      }
})
}

function userLogin(displayData,respons){
    const userEmail = displayData.body.emailId;        // store the email in email variable
    const  userPassword   = displayData.body.password;    //store the password in password variable
    user.findOne({ emailId : userEmail },{},{lean:true},function(err,result){         
        console.log(result)
        if (err){
            console.log(err)
            return respons.status(400)
        }
        else if (result == null ){                          // check the result
            respons.status(400).end("email doesn't found")


        }
        else{
            if(bcrypt.compareSync(userPassword,result.password))      
            {
               // delete result.password; 
               console.log("bhjhkjfhg---");
                const token = jwt.sign({_id :result._id},'vish')
                respons.header("auth-token",token).send(token)     

                respons.status(200).json({
                    msg:'login succus' ,  
                     token:token});
        
            }
            else respons.status(401);
    }    
    
}) 



}


//  admin login signup

function adminSignUp(postData,respo){

    const schema=joi.object({
        firstName:joi.required(),
        emailId: joi.string().trim().email().required(),
        password:joi.required(),
        phoneNumber:joi.required(),
      })

      joi.validate(postData.body,schema,(err,data)=>{
        if(err)
        {
            console.log(err)
            respo.status(400).send('an error occured')
        }

    else{
    postData.body.password = bcrypt.hashSync(postData.body.password,10)
    var newUser = new admin(postData.body);
        // insert
     newUser.save((err,data)=>{
    if(err){
        respo.send(err);
        respo.json({msg:'failed to add signup'});

    }else{
        respo.json({msg:'signup added successfully'});
    }

})
      }
})
}

function adminLogin(displayData,respons){
    const userEmail = displayData.body.emailId;        // store the email in email variable
    const  userPassword   = displayData.body.password;    //store the password in password variable
    admin.findOne({ emailId : userEmail },{},{lean:true},function(err,result){         
        console.log(result)
        if (err){
            console.log(err)
            return respons.status(400).json()
        }
        else if (result == null ){                          // check the result
            respons.status(400).end("email doesn't found")


        }
        else{
            if(bcrypt.compareSync(userPassword,result.password))      
            {
               // delete result.password; 
                const token = jwt.sign({_id :result._id},'vishal')
                respons.header("auth-token",token).send(token)     

			   respons.status(200).json({
               msg:'login succus' ,  
                token:token});
        
            }
            else respons.status(401);
    }    
    
}) 



}


module.exports = {userSignUp,userLogin,adminSignUp,adminLogin}
