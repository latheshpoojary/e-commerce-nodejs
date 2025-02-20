const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

const { _create, _getAllCategory } = require('../services/category.service');

const getAllCategory = catchAsync(async (req,res,next)=>{
    const categories = await _getAllCategory(req,next);

    return res.status(200).json({
        status:true,
        data:categories
    })
})

const create = catchAsync(async (req,res,next)=>{
    const {name,desc} = req.body;
    if(!name) return next(new AppError('name  is required',400));
    const newCategory = await _create(req,next);
    if(newCategory){
        return res.status(201).json({
            status:true,
            message:"Category created successfully"
        })
    }
})

module.exports = {
    getAllCategory,
    create
}