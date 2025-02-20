const { seller, user } = require("../database/config/database.config");

const _onBoardSeller = async (req, next) => {
  const { company_name, email, phone, pincode, city } = req.body;

  if (!company_name || !email || !phone || !pincode || !city)
    return next(
      new AppError("company name,email,phone,pincode and city is required", 400)
    );
  const newSeller = await seller.create({
    company_name,
    email,
    phone,
    pincode,
    city,
  });

  if (!newSeller) next(new AppError("Unable to create seller.", 500));
  return newSeller;
};

module.exports = {
  _onBoardSeller,
};
