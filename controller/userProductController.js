//require all require module

const category = require('../Model/categorySchema')

function getProduct(productRequest,productResponse){

    category.aggregate([
          
            { 
                $lookup: {
                    from: "products",
                    localField: "_id",
                    foreignField: "categorys",
                    as: "productDoc"
                   
                }
            },
            {
                $project: {
                    categoryName: '$categoryName',
                    count: {$size :"$productDoc"},
                    productDoc:{$slice: ["$productDoc",1]}
                    
                }
            },
            {
                $skip:0
            },
            {
                $limit:5 
            }
    
            
        ]).exec(function(err,result)
    {
        if(err){
            productResponse.status(401).json({Err:err})
            console.log(err)
                 }
                 else
                 {
                     console.log(result);
                     productResponse.status(200).json({
                        message:"here all categories are....",
                       total_count_of_categories_are:result.length,
                    result
                    })
                 }

    })
    //productResponse.end();
        

  
// product.find({}).skip(0).limit(5).exec((err,results)=> {
//     productResponse.json(results)
    
//     });


    // product.findOne(products,body,function(err,data) {
    //     if(err)
    //         productResponse.status(400);
    //     else
    //     productResponse.status(200).send(data);
    //     console.log('success uddate')
    // });
}



module.exports={getProduct}






