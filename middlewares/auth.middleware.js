const { verify } = require('jsonwebtoken');
const AppError = require('../utils/appError');
const { verifyRefreshToken, verifyAccessToken } = require('../utils/jwt.service');
const catchAsync = require('../utils/catchAsync');

const authMiddleware = catchAsync(async (req,res,next)=>{
    const header = req.headers['authorization'];
    if(!header)return  next(new AppError('Permission is denied',403))
    const token = header.split('Bearer ')[1];
    if(!token) return next(new AppError('Permission is denied',403))

    const payload = await verifyAccessToken(token);
    if(!payload)  return next(new AppError('Permission is denied',403))
    
    req.user = payload;
    
    
    next();
    
})

module.exports = {
    authMiddleware
}