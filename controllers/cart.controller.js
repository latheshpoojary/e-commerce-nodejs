const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { _addCart, _getCartDetails } = require("../services/cart.service");

const getCartDetails = catchAsync(async (req, res, next) => {
  const userCart = await _getCartDetails(req, next);
  let sum = 0;
  userCart.forEach((item) => {
    const quantity = item.quantity;

    const productPrice = item.product.price;

    sum += quantity * productPrice;
  });
  return res.status(200).json({
    status: true,
    data: userCart,
    total: sum,
  });
});

const addCart = catchAsync(async (req, res, next) => {
  const { product_id, quantity } = req.body;
  if (!product_id || !quantity)
    return next(new AppError("product_id or quantity is required"));
  const newCart = await _addCart(req, next);
  if (newCart) {
    return res.status(201).json({
      status: true,
      message: "cart added successfully",
    });
  }
});

module.exports = {
  addCart,
  getCartDetails,
};
