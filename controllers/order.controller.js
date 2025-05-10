const {
  _orderSingleProduct,
  _getOrderDetails,
} = require("../services/order.service");
const catchAsync = require("../utils/catchAsync");

const orderDetails = catchAsync(async (req, res, next) => {
  const orders = await _getOrderDetails(req, next);
  return res.status(200).json(orders);
});

const orderSingleProduct = catchAsync(async (req, res, next) => {
  const newOrder = await _orderSingleProduct(req, next);
  if (newOrder) {
    return res.status(201).json({
      status: true,
      message: "Order placed successfully",
    });
  }
});

module.exports = {
  orderSingleProduct,
  orderDetails,
};
