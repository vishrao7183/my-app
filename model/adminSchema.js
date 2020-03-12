const mongoose = require('mongoose')
const validator = require('validator')

const adminSchema =  mongoose.Schema({

    firstName:{
        type : String,
        
        index : true,
    },
    emailId:{
        type : String,
      
        unique : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('email not valid')
            }
        }

    
    },
    password:{
        type : String,
       
        max: 100
    },
    phoneNumber : {
        type : String,
       
        index : true,
        validate:{
            validator :function(v){
                var re = /^\d{10}$/;
                return(v== null||v.trim().length<1|| re.test(v))
            },
            message : 'phone no. is invaild'
        }
        

    },
    status : {
        type : String,
        require : true,
        enum:['active','inactive','delete']

    }
},{timestamps : true} )

const admin=mongoose.model('admin',adminSchema);
module.exports = admin;
