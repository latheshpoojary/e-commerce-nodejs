const catchAsync = require("../services/catchAsync");
const seller = require("../database/models/seller.model");
const AppError = require("../services/appError");
const onBoardSeller = catchAsync(async (req, res, next) => {
  const { company_name, email, phone, pincode, city } = req.body;
  if (!company_name || !email || !phone || !pincode || !city)
    return next(
      new AppError("company name,email,phone,pincode and city is required", 400)
    );
  // const newSeller = await seller.create(req.body);

  // if (!newSeller) next(new AppError("Unable to create seller.", 500));
  return res.status(201).json({
    status: "Success",
    message:"Seller created successfully"
  });
});

module.exports = {
    onBoardSeller
}
