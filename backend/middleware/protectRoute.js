import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({
                error:"Unothorised - No Token Provided"
            });
        }
        const decodedToken = jwt.verify(token,process.env.JWT_SECRET);
        if(!decodedToken){
            return res.status(401).json({
                error:"Unothorised - No Token Provided"
            });
        }
        const user  = await User.findById(decodedToken.userId).select("-password");
        if(!user){
            return res.status(404).json({
                error:"No User found"
            });
        }
        req.user=user;
        next();
    } catch (e) {
        console.log("error in protect route",e);
        res.status(500).json({
            erro:"Internal Server Error"
        })
    }
}

export default protectRoute;