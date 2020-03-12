const mongoose = require('mongoose')
const productSchema =  mongoose.Schema({

    productName:[{
    type : String,
    require: true,
    
}],
productPrize:[{
    type : String,
    require: true,
    
}],
productImage:[{
    type : String,
    require: true,
}],
categorys :[ {
    type: mongoose.Schema.Types.ObjectId, ref: 'category'
}],
    
    status : {
        type : String,
        require : true,
        enum :['active','inactive','delete']
    }
},{timestamps : true} )


const product=mongoose.model('product',productSchema);
module.exports = product;



