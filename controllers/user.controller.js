const catchAsync = require("../services/catchAsync");
const AppError = require("../services/appError");
const {user,address} = require('../database/config/database.config')
const { hashPassword, comparePassword } = require("../utils/passwordConfig");
const {buildToken} = require('../services/jwt.service');


const getAllUser = catchAsync(async (req, res, next) => {
  const userDetails = await user.findAll({
    include:[
      {
        model:address,
        
        
      }
    ]
  })
  return res.json(userDetails);
});

const register = catchAsync(async (req, res, next) => {
  const { name, email, password, phone } = req.body;
   (name, email, password, phone);

  if (!name || !email || !password || !phone)
    next(
      new AppError(
        "Please provide all required information: name, email, password, and phone number.",
        400
      )
    );
  const userInfo = await user.findOne({
    where:{
      email
    }
  });
  if (userInfo) return next(new AppError("User Already Exist", 409));
  const hashedPassword = await hashPassword(password);
  const newUser = await user.create({
    name,
    email,
    password: hashedPassword,
    phone,
  });
  if (!newUser) {
    return next(new AppError("Failed to create user", 500));
  }
  const {accessToken,refreshToken} = buildToken(newUser,'user');
  res.cookie('refresh',refreshToken,{
    httpOnly: true, sameSite: 'strict' ,secure:true
  })
  return res.json({
    status: "Success",
    message: "User created successfully",
    token:accessToken,
  });
});

const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError("email or password is incorrect", 400));
  const userDetails = await user.findOne({
    email
  })
  if(!userDetails) return next(new AppError("email or password is incorrect",400));

  const isValidPassword = await comparePassword(password,userDetails.password);
  if(!isValidPassword) return next(new AppError("email or password is incorrect",400));
  const {accessToken,refreshToken} = buildToken(userDetails,'user');
   (refreshToken);
  
  res.cookie('refresh',refreshToken,{
    httpOnly: true, sameSite: 'strict' ,secure:true
  })
  return res.status(200).json({
    status:"Success",
    message:"User Login Successfully",
    token:accessToken
  })

});

module.exports = {
  getAllUser,
  register,
  login
};
