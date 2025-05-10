const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/appError");
const { address, user } = require("../database/config/database.config");
const { where } = require("sequelize");

const { _getUserAddress, _addAddress } = require("../services/address.service");

const getUserAddress = catchAsync(async (req, res, next) => {
  const user = await _getUserAddress(req.user, next);
  return res.status(200).json(user);
});

const addAddress = catchAsync(async (req, res, next) => {
  
  const newAddress = await _addAddress(req,next);
  if(newAddress){
    return res.status(201).json({
      status: "Success",
      message: "Address added successfully",
    });
  }
 
});

module.exports = {
  addAddress,
  getUserAddress,
};
