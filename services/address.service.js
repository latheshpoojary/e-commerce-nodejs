const { user, address } = require("../database/config/database.config");
const AppError = require("../utils/appError");

const _getUserAddress = async (user, next) => {
  
  const addresses = await address.findAll({
    where: {
      user_id:user.id // Use the array of IDs to fetch addresses
    },
    attributes: {
      exclude: ["deletedAt", "user_id", "addressId"],
    },
  });
  return {
    addresses,
  };
};

const _addAddress = async (req,next)=>{
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
    user_id:req.user.id
  });
  return newAddress
}

module.exports = {
  _getUserAddress,
  _addAddress
};
