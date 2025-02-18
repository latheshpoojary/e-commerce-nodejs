const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { address, user } = require("../database/config/database.config");
const { where } = require("sequelize");
const addAddress = catchAsync(async (req, res, next) => {
  const { pincode, city, state, house_name } = req.body;

  if (!pincode || !state)
    return next(new AppError("pincode and state are required", 400));
  const newAddress = await address.create({
    pincode,
    city,
    state,
    house_name,
  });
  await user.update(
    {
        addressId: newAddress.address_id,
    },
    {
        where:{
            user_id:2
        }
    }
);
  return res.status(201).json({
    status: "Success",
    message: "Address added successfully",
  });
});

module.exports = {
  addAddress,
};
