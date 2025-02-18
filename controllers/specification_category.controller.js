const {specification} = require("../database/config/database.config");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

const create = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  if (!name) return next(new AppError("name is required", 400));
  const newSpecification = await specification.create({
    name
  });
  return res.status(201).json({
    status:"Success",
    message:"Specification created successfully",
    
  })
});

module.exports = {
    create
}
