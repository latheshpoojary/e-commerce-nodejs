const { _addProduct, _getProductDetails } = require("../services/product.service");
const catchAsync = require("../utils/catchAsync");

const addProduct = catchAsync(async (req,res,next)=>{

    const newProduct = await _addProduct(req,next);
    if(newProduct){
        return res.status(201).json({
            status:true,
            message:"Product created successfully"
        })
    }
  
})
const getProductDetails = catchAsync(async (req,res,next)=>{
    const productInfo = await _getProductDetails(req,next);
    const productWithSpecification = {
        product:{
            details:productInfo.productDetails,
            specification:productInfo.specification_details
        },

    }
    return res.status(200).json(productWithSpecification)
})
module.exports = {
    addProduct,
    getProductDetails
}