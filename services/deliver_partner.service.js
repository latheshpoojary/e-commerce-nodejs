const { deliveryPartner } = require("../database/config/database.config");

const _deliveryOnBoard = async (req, next) => {
  const { company_name, email, phone, pincode, city } = req.body;
  if (!company_name || !email || !phone || !pincode || !city)
    return next(
      new AppError(
        "company name , email , phone , pincode and city is required",
        400
      )
    );
  const newDeliveryPartner = await deliveryPartner.create(req.body);

  return newDeliveryPartner;
};

module.exports = {
  _deliveryOnBoard,
};
