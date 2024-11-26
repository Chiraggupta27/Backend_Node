import Joi from "joi";

const schema = Joi.object({
    userName: Joi.string().required("Please enter a valid username").min(6),
    password: Joi.string().required("Please enter a valid password").min(6),
});

const authValidation = (req , res , next) => {

    const {error} = schema.validate(req.body);
    if(error){
        return res.status(400).json({
            success: false,
            message: error.details[0].message
        })
    }
    next();

}


export default {authValidation};