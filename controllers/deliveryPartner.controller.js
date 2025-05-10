const { _deliveryOnBoard } = require("../services/deliver_partner.service");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");
const deliveryPartnerOnBoard = catchAsync(async (req, res, next) => {
  const newDeliveryPartner = await _deliveryOnBoard(req, next);
  return res.status(201).json({
    status: true,
    message: "Delivery Partner Added successfully",
  });
});

module.exports = {
  deliveryPartnerOnBoard,
};
