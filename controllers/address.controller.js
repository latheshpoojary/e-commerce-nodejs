const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { address, user } = require("../database/config/database.config");
const { where } = require("sequelize");

const { _getUserAddress } = require("../services/address.service");

const getUserAddress = catchAsync(async (req, res, next) => {
  const user = await _getUserAddress(req, next);
  return res.status(200).json(user);
});

const addAddress = catchAsync(async (req, res, next) => {
  const { pincode, city, state, house_name } = req.body;

  if (!pincode || !state)
    return next(new AppError("pincode and state are required", 400));
  const userDetails = await user.findByPk(req.user.id);
  if (!userDetails) return next(new AppError("Invalid user", 404));
  const newAddress = await address.create({
    pincode,
    city,
    state,
    house_name,
  });
  let updatedAddressIds;

  if (userDetails.addressId) {
    updatedAddressIds = [...userDetails.addressId, newAddress.address_id];
  } else {
    updatedAddressIds = [newAddress.address_id];
  }
  await userDetails.update({
    addressId: updatedAddressIds,
  });

  return res.status(201).json({
    status: "Success",
    message: "Address added successfully",
  });
});

module.exports = {
  addAddress,
  getUserAddress,
};
