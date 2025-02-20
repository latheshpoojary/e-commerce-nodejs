const { _deliveryOnBoard } = require('../services/deliver_partner.service');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const deliveryPartnerOnBoard = catchAsync(async (req,res,next)=>{
    const {company_name,email,phone,pincode,city} = req.body;
    if(!company_name || !email || !phone || !pincode || !city) return next(new AppError('company name , email , phone , pincode and city is required',400))
    const newDeliveryPartner = await _deliveryOnBoard(req,next);
    return res.status(201).json({
        status:true,
        message:'Delivery Partner Added successfully'
    })
})

module.exports = {
    deliveryPartnerOnBoard
}