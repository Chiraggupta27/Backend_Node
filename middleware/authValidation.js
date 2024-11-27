import Joi from "joi";
import jwt from "jsonwebtoken";

const schema = Joi.object({
    userName: Joi.string().min(6).required().messages({
        "string.min": "Username must be at least 6 characters long",
        "any.required": "Please enter a valid username",
    }),
    password: Joi.string().min(6).required().messages({
        "string.min": "Password must be at least 6 characters long",
        "any.required": "Please enter a valid password",
    }),
});

const authValidation = (req , res , next) => {

    const jwtToken = req.headers.authorization;
    if(!jwtToken || !jwtToken.startsWith("Bearer ")){
        return res.status(401).json({
            success:false,
            message:"Unauthorized"
        })
    }


    const token = jwtToken.split(" ")[1];

    try {
        // Verify the JWT token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Attach decoded user info to request object
    } catch (err) {
        console.log("err",err);
        return res.status(401).json({
            success: false,
            message: `Unauthorized: Invalid token - ${err.message}`,
        });
    }

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({
            success: false,
            message: "unauthorized"
        })
    }
    next();

}


export default {authValidation};