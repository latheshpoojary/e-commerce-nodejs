const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const {
  _create,
  _getAllCategory,
  _getSubCategory,
} = require("../services/category.service");

const getAllCategory = catchAsync(async (req, res, next) => {
  const categories = await _getAllCategory(req, next);

  return res.status(200).json({
    status: true,
    data: categories,
    total: categories.length,
  });
});

const getSubCategory = catchAsync(async (req, res, next) => {
  const subCategories = await _getSubCategory(req, next);
  return res.status(200).json({
    message: true,
    total: subCategories.length,
    data: subCategories,
  });
});

const create = catchAsync(async (req, res, next) => {
  const newCategory = await _create(req, next);
  if (newCategory) {
    return res.status(201).json({
      status: true,
      message: "Category created successfully",
    });
  }
});

module.exports = {
  getAllCategory,
  getSubCategory,
  create,
};
