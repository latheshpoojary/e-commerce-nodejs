const Specification = require("../database/models/specification.model");
const AppError = require("../services/appError");
const catchAsync = require("../services/catchAsync");

const create = catchAsync(async (req, res, next) => {
  const { name } = req.body;
  if (!name) return next(new AppError("name is required", 400));
  const newSpecification = await Specification.create({
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
