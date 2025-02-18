const { verify } = require('jsonwebtoken');
const AppError = require('../services/appError');
const { verifyToken } = require('../services/jwt.service');

const authMiddleware = (req,res,next)=>{
    const header = req.headers['authorization'];
    if(!header)return  next(new AppError('Permission is denied',403))
    const token = header.split('Bearer')[1];
    if(!token) return next(new AppError('Permission is denied',403))

    const payload = verifyToken(token);
    if(!payload)  return next(new AppError('Permission is denied',403))
    
    res.user = payload;
    next();
    
}

module.exports = {
    authMiddleware
}