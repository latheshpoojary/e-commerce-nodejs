const { _register, _login } = require("../services/auth.service");
const catchAsync = require("../utils/catchAsync");


const register = catchAsync(async (req,res,next)=>{
    const token  = await _register(req,next);
    res.cookie("refresh", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: true,
      });
    return res.status(200).json({
        status:true,
        message:"register successfully",
        token
    })
})

const login = catchAsync(async (req,res,next)=>{
   const token =  await _login(req,next);
   res.cookie("refresh", token, {
    httpOnly: true,
    sameSite: "strict",
    secure: true,
  });
   return  res.status(200).json({
    status:true,
    message:"Successfully logged in",
    token
   })
})


module.exports = {
    login,
    register
}