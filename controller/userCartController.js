const cart = require('../Model/cartSchema')


function postCart(cartReq,cartRes){

    var newCart = new cart(cartReq.body);
    console.log(cartReq.body)
    console.log(newCart)
    // insert
 newCart.save((err,data)=>{
if(err){
    cartRes.send(err);
    cartRes.json({err});

}else{
    cartRes.json({data:data});
}

})
}


function viewCart(viewReq,viewRes){
    var pageno = parseInt(viewReq.query.pagno)
				var size = parseInt (viewReq.query.size)
				let query ={};
				let re;
				if (pageno<0 || pageno === 0)
				{
					re = {"error":true,"massage":"invalid page number, page start with 1"};
                viewRes.json(re)			
            } 
            query.skip = size*(pageno-1)
            query.limit=size
            userid=viewReq.query.id
    cart.findOne({userid})
    .populate('products') 
    .exec(function(err,comment) {
        console.log(comment);
        viewRes.json({products:comment})
    });
}
module.exports={postCart,viewCart};
