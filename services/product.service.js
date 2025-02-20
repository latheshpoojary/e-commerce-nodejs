const AppError = require("../utils/appError");
const {
  product,
  productSpecification,
  seller,
  specification,
} = require("../database/config/database.config");
const { where } = require("sequelize");
const _addProduct = async (req, next) => {
  const { product_name, price, desc, stock, specification } = req.body;

  if (!product_name || !price || !stock || specification.length === 0)
    return next(
      new AppError("name,price,stock,category and specification is required",400)
    );
  

  const newProduct = await product.create({
    product_name,
    price,
    desc,
    stock,
    seller_id: 1,
  });
  if (newProduct) {
    for (let i = 0; i <= specification.length - 1; i++) {
      await productSpecification.create({
        product_id: newProduct.product_id,
        specificationRef_id: specification[i].spec_id,
        spec_value: specification[i].spec_value,
      });
    }
  }
  return newProduct;
};

const _getProductDetails = async (req, next) => {
  const params = req.params;
  const product_id = parseInt(params.product_id);
  const productDetails = await product.findOne({
    where: {
      product_id,
    },
    include: [{
        model:seller,
        attributes:['company_name']
    }],
    attributes:['product_id','product_name','price','desc']
  });
  const specification_details = await productSpecification.findAll({
    where:{
        product_id
    },
    include:[
        {
            model:specification,
            attributes:['name']
        }
    ],
    attributes:['spec_value']
  })
  return {
    productDetails,
    specification_details
  };
};

module.exports = {
  _addProduct,
  _getProductDetails
};
