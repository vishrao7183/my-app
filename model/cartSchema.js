const mongoose = require('mongoose')
const cartSchema =  mongoose.Schema({

    user :[ {
        type: mongoose.Schema.Types.ObjectId
    }],
   products :[ {
    type: mongoose.Schema.Types.ObjectId, ref: 'product'
}],
totalPrize :{
    type :String,
    require : true
},
    
    status : {
        type : String,
        require : true,
        enum :['active','inactive','delete']
    }
},{timestamps : true} )


const cart=mongoose.model('cart',cartSchema);
module.exports = cart;