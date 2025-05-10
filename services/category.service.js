const { where } = require("sequelize");
const { category } = require("../database/config/database.config");
const AppError = require("../utils/appError");

const _getAllCategory = async (req, next) => {
  const categories = await category.findAll({
    where: {
      parent_category_id: null,
    },
    attributes: {
      exclude: ["parent_category_id", "deletedAt"],
    },
  });
  return categories;
};

const _getSubCategory = async (req, next) => {
  const subCategories = await category.findAll({
    where: {
      parent_category_id: req.params.category_id,
    },
    attributes: {
      exclude: ["deletedAt", "parent_category_id"],
    },
  });
  return subCategories;
};

const _create = async (req, next) => {
  const { name, desc, parent_category_id } = req.body;
  if (!name) return next(new AppError("name  is required", 400));
  let parentCategory;
  if (parent_category_id) {
    parentCategory = await category.findByPk(parent_category_id);
  }
  if (!parentCategory) {
    return next(new AppError("Category Id is not found", 404));
  }
  const newCategory = await category.create({
    name,
    desc,
    parent_category_id,
  });
  return newCategory;
};

module.exports = {
  _getAllCategory,
  _getSubCategory,
  _create,
};
