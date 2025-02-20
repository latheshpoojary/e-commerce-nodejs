const {deliveryPartner} = require('../database/config/database.config');

const _deliveryOnBoard = async (req,next)=>{
   const newDeliveryPartner = await deliveryPartner.create(req.body);

   return newDeliveryPartner;
}

module.exports = {
   _deliveryOnBoard
}