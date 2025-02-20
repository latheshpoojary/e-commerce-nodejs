const { user, address } = require("../database/config/database.config");

const _getUserAddress = async (req, next) => {
  const userDetails = await user.findByPk(req.user.id, {
    attributes: {
      exclude: ["password", "deletedAt"],
    },
  });
  const addresses = await address.findAll({
    where: {
      address_id: userDetails.addressId, // Use the array of IDs to fetch addresses
    },
    attributes: {
      exclude: ["deletedAt", "user_id", "addressId"],
    },
  });
  return {
    addresses,
  };
};

module.exports = {
  _getUserAddress,
};
