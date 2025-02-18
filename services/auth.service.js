const { user, userToken } = require("../database/config/database.config");
const AppError = require("../utils/appError");
const { buildToken } = require("../utils/jwt.service");
const { hashPassword, comparePassword } = require("../utils/passwordConfig");

const _register = async (req, next) => {
  const { name, email, password, phone } = req.body;

  if (!name || !email || !password || !phone)
    next(
      new AppError(
        "Please provide all required information: name, email, password, and phone number.",
        400
      )
    );
  const userInfo = await user.findOne({
    where: {
      email,
    },
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
  const { accessToken, refreshToken } = await buildToken(newUser, "user");

 
  return accessToken;
};

const _login = async (req, next) => {
  const { email, password } = req.body;
  if (!email || !password)
    return next(new AppError("email or password is incorrect", 400));
  const userDetails = await user.findOne({
    where: {
      email,
    },
  });
  if (!userDetails)
    return next(new AppError("email or password is incorrect", 400));

  const isValidPassword = await comparePassword(password, userDetails.password);

  if (!isValidPassword)
    return next(new AppError("email or password is incorrect", 400));
  const { accessToken, refreshToken } = await buildToken(userDetails, "user");

  

  await userToken.update(
    {
      refreshToken,
    },
    {
      where: {
        userId: userDetails.user_id,
      },
    }
  );
  return accessToken
};

module.exports = {
  _register,
  _login
};
