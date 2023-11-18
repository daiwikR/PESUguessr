const User=require('../models/user');
const {hashPassword,comparePassword}= require('../helpers/auth')


const test=(req,res)=>{
    res.json('test is working')
}

const registerUser= async(req,res)=>{
    try{
        const {name,email,password} =req.body;
        if(!name){
            return res.json({
                error:'name is required'
            })
        };
        if(!password || password.length<6){
            return res.json({
                error:'password is required and should be min 6 characters long'
            })
        };
        const exist= await User.findOne({email})
        if(exist){
            return res.json({
                error:'email is taken'
            })
        }
        const hashedPassword= await hashPassword(password)

        const user= await User.create({
            name,
            email,
            password:hashedPassword
        })

        return res.json({user})
    }catch(err){
        console.log(err)

    }

}

//login
const loginUser= async(req,res)=>{
    try{
        const {email,password}=req.body;
        if(!email || !password){
            return res.json({
                error:'email and password required'
            })
        }
        const user= await User.findOne({email})
        if(!user){
            return res.json({
                error:'invalid credentials'
            })
        }
        const match= await comparePassword(password,user.password)
        if(match)
        {
            res.json('login successful')
        }
        if(!match){
            return res.json({
                error:'invalid credentials'
            })
        }
    }catch(err){
        console.log(err)
    }
}


module.exports = {
    test,
    registerUser,
    loginUser
}