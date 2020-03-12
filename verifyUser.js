var jwt =require('jsonwebtoken')
function verifyUser (request, response, next){
    const token =request.headers["auth-token"];
    console.log('token get product---------',token)
    if (!token)  return response.status(401).send("access denied");

    try{
        console.log("hgjfghfhfhhg-------------------");
        console.log("bhjhkjfhg---");
        const verified = jwt.verify(token,'vish')

        // check data in db and insert in req
        

        
        request.user= verified;
        // respons.send(verified)
       next();
    }catch (err){
        console.log(err, "error in token verfication-----");
        //res.send(err)
        response.status(401).json({msg: 'token not verified', statusCode: 401})
        }
}
module.exports=verifyUser;
