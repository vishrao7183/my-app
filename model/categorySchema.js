const mongoose = require('mongoose')
const categorySchema =  mongoose.Schema({

    categoryName:[{
    type : String,
    require: true,
    
}],


    
    status : {
        type : String,
        require : true,
        enum :['active','inactive','delete']
    }
},{timestamps : true} )


const category=mongoose.model('category',categorySchema);
module.exports = category;
