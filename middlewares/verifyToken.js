import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler"

export const verifyToken = (req, res, next) => {
    const {accessToken} = req.cookies;
    
    //check cookies
    if (!accessToken) {
        return res.status(401).json({message : "unauthorized"})
    };

    // token verify
    jwt.verify(accessToken, process.env.JWT_SECRET, asyncHandler(async(error, decode) => {
        if (error) {
            return res.status(400).json({message: "invalid token"})
        }
        next();
    }));
}; 