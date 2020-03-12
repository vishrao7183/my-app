//require all require module
const category = require('../Model/categorySchema')

function postCategory(categoryReq,categoryRes){

    var newCategory = new category(categoryReq.body);
    console.log(categoryReq.body)
    console.log(newCategory)
    // insert

 newCategory.save((err,data)=>{
if(err){
    categoryRes.send(err);
    categoryRes.json({err});

}else{
    categoryRes.json({data:data});
}

})
}
function updateCategory(categoryRequest,categoryResponse){
    var categoryName = categoryRequest.body.categoryName;
    var body = categoryRequest.body;

    category.findOneAndUpdate(categoryName,body,function(err,data) {
        if(err)
        categoryResponse.status(400);
        else
        categoryResponse.status(200).json({data:data});
        console.log('success uddate')
    });
}
function deleteCategory(categoryRequest,categoryResponse){
    var categoryName = categoryRequest.body.categoryName;
    var body = categoryRequest.body;

    category.findOneAndDelete(categoryName,body,function(err,data) {
        if(err)
        categoryResponse.status(400);
        else
        categoryResponse.status(200).json({data:data});
        console.log('success delete')
    });
}

function view(viewRequest,viewResponse){

    var pageno = parseInt(viewRequest.query.pagno)
    var size = parseInt (viewRequest.query.size)
    let query ={};
    let re;
    if (pageno<0 || pageno === 0)
    {
        re = {"error":true,"massage":"invalid page number, page start with 1"};
    viewResponse.json({re})			
} 
query.skip = size*(pageno-1)
query.limit=size

category.find({},function(err,data) {
if(err)
viewResponse.status(400);
else
viewResponse.status(200).json({data:data});
console.log('success ')
});
    
 

}

module.exports={postCategory,updateCategory,deleteCategory,view}