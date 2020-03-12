//require all require module

const product = require('../Model/productSchema')


function postProduct(productReq,productRes){
      
    var newProduct = new product({
        productName:productReq.body.productName,
        productPrize:productReq.body.productPrize,
        productImage:productReq.file.path,
        categorys:productReq.body.categorys,
   
    });
    console.log(productReq.file.path)
    console.log(newProduct)
     // insert
 newProduct.save((err,data)=>{
if(err){
    productRes.send(err);
    productRes.json({err});

}else{
    productRes.json({data:data});
}

})
}
function updateProduct(productRequest,productResponse){
    var productName = productRequest.body.productName;
    var body = productRequest.body;

    product.findOneAndUpdate(productName,body,function(err,data) {
        if(err)
            productResponse.status(400);
        else
        productResponse.status(200).json({data:data});
        console.log('success uddate')
    });
}
function deleteProduct(productRequest,productResponse){
    var productName = productRequest.body.productName;
    var body = productRequest.body;

    product.findOneAndDelete(productName,body,function(err,data) {
        if(err)
            productResponse.status(400);
        else
        productResponse.status(200).json({data:data});
        console.log('success delete')
    });
}

function viewProduct(viewReq,viewRes){

        
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
    product.findOne({productName : viewReq.query.productName})
    .populate('categorys') 
    .exec(function(err,comment) {
        console.log(comment);
        viewRes.json({products:comment})
    });
    
    

}


module.exports={postProduct,updateProduct,deleteProduct,viewProduct}