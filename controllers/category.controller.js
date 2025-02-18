const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const {category} = require('../database/config/database.config');
// 
const create = catchAsync(async (req,res,next)=>{
    const {name,desc} = req.body;

    if(!name) return next(new AppError('name  is required',400))

    const newCategory = await category.create(req.body);

    return res.status(201).json({
        status:"Success",
        message:"Category created the successfully"
    })
})

module.exports = {
    create
}