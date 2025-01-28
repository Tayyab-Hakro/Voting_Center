import jwt from 'jsonwebtoken'
const IsAuthentication =async (req , res , next) =>{
    const token = req.headers

    if(!token){
        res.return(401).json({success : false , message:"Token is not avaible"})
    }
    try{
        const SecretKey = process.env.JWT_SECRET
        const decode = await jwt.verify("token" , SecretKey)
        req.user = decode
        next()
    }catch(error){
        console.log(error)
    }
    
}