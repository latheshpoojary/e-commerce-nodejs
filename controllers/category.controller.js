const catchAsync = require('../services/catchAsync');
const AppError = require('../services/appError');
const {category} = require('../database/config/database.config');
// 
const create = catchAsync(async (req,res,next)=>{
    const {name,desc} = req.body;

    if(!name || !desc) return next(new AppError('name and description is required',400))

    const newCategory = await category.create(req.body);

    return res.status(201).json({
        status:"Success",
        message:"Category created the successfully"
    })
})

module.exports = {
    create
}