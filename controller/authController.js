const login = (req, res) => {
    const {userName , password} = req.body;

    if(!userName || !password){
        return res.status(400).json({
            success:false,
            message:"Please enter username and password"
        })
    }
    return res.status(200).json({
        success: true,
        message: "Logged in successfully",
        data: {
            userName: userName,
            password: password,
        },
    });
};

const signUp = (req,res) => {
    const {userName , password} = req.body;

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
    })
}

export default {
    login,
    signUp,
};
