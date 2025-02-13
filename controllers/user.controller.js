
const catchAsync = require('../services/catchAsync');

const getAllUser = catchAsync(async (req,res,next)=>{
    return res.json("this is from get All User")
})

module.exports = {
    getAllUser
}