import generateToken from "../utils/jwt.js";

const login = (req, res) => {
    const {userName , password} = req.body;

    if(!userName || !password){
        return res.status(400).json({
            success:false,
            message:"Please enter username and password"
        })
    }

    const token = generateToken.generateToken({userName,password});

    return res.status(200).json({
        success: true,
        message: "Logged in successfully",
        data: {
            userName: userName,
            password: password,
        },
        token:token
    });
};

const signUp = (req,res) => {
    const {userName , password} = req.body;
    const generateToken = generateToken({userName,password});

    if(!userName || !password){
        return res.status(400).json({
            success:false,
            message:"Please enter username and password"
        })
    }
    return res.status(200).json({
        success:true,
        message:"Signed up successfully",
        data: {
            userName: userName,
            password: password,
        },
        token:generateToken
    })
}

export default {
    login,
    signUp,
};
