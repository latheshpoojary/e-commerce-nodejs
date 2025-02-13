const catchAsync = require("../services/catchAsync");
const AppError = require("../services/appError");
const User = require("../database/models/user.model");
const { hashPassword } = require("../utils/passwordConfig");

const getAllUser = catchAsync(async (req, res, next) => {
  return res.json("this is from get All User");
});

const register = catchAsync(async (req, res, next) => {
  const { name, email, password, phone } = req.body;
  console.log(name, email, password, phone);

  if (!name || !email || !password || !phone)
    next(
      new AppError(
        "Please provide all required information: name, email, password, and phone number.",
        400
      )
    );
  const userInfo = await User.findOne({
    email,
  });
  if (userInfo) return next(new AppError("User Already Exist", 409));
  const hashedPassword = await hashPassword(password);
  const newUser = await User.create({
    name,
    email,
    password:hashedPassword,
    phone,
  });
  if (!newUser) {
    return next(new AppError("Failed to create user", 500));
  }
  return res.json({
    status: "Success",
    message: "User created successfully",
    
  });
});

module.exports = {
  getAllUser,
  register,
};
