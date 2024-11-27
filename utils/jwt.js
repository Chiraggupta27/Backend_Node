import jwt from "jsonwebtoken";

const generateToken = (payload) => {
    return jwt.sign(payload , process.env.JWT_SECRET, {expiresIn:"1h"})
}

export const verifyToken = (token) => {
    return jwt.verify(token , process.env.JWT_SECRET , (err , decoded) => {
        if(err) return null;
        return decoded;
    })
}

export const decodeToken = (token) => {
    return jwt.decode(token , process.env.JWT_SECRET , {complete:true})
}

export const refreshToken = (token) => {
    return jwt.refresh(token , process.env.JWT_SECRET  , {expiresIn:"1h" , algorithm:"HS256" , noTimestamp:true })
}

export const verifyRefreshToken = (token) => {
    return jwt.verify(token , process.env.JWT_SECRET , (err,decoded)=>{
        if(err) return null;
        return decoded;
    })
}

export const decodeRefreshToken = (token) => {
    return jwt.decode(token , process.env.JWT_SECRET , {complete:true})
}

export const verifyTokenAndRefreshToken = (token , refreshToken) => {
    const decoded = verifyToken(token);
    const decodedRefresh = verifyRefreshToken(refreshToken);
}

export default {generateToken}

