const catchAsync = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");
const { _onBoardSeller } = require("./seller.service");
const onBoardSeller = catchAsync(async (req, res, next) => {
  const newSeller = await _onBoardSeller(req, next);
  if (newSeller) {
    return res.status(201).json({
      status: true,
      message: "Seller created successfully",
    });
  }
});

module.exports = {
  onBoardSeller,
};
