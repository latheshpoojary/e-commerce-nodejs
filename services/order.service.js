const AppError = require("../utils/appError");
const { order, order_details, product, seller } = require("../database/config/database.config");
const { where } = require("sequelize");

const _getOrderDetails = async (req, res, next) => {
  try {
    const orderDetails = await order_details.findAll({
      include: [
        {
          model: order, // Assuming you have an association defined between order_details and order
          where: {
            user_id: req.user.id,
          },
          attributes: [], // Exclude order attributes from the result
        },
        {
          model: product,
          attributes: {
            exclude: ["seller_id", "deletedAt"],
          },
          include: [
            {
              model: seller,
              attributes: {
                exclude: ["password", "deletedAt"],
              },
            },
          ],
        },
      ],
      attributes: {
        exclude: ["weight", "product_id", "order_id", "deletedAt"],
      },
    });

    return orderDetails;
  } catch (error) {
    console.error("Error fetching order details:", error);
    next(error); // Pass the error to your error handling middleware
  }
};



const _orderSingleProduct = async (req, next) => {
  const { shipping_address, product_id, quantity } = req.body;
  if (!shipping_address || !product_id || !quantity)
    return next(
      new AppError("shipping address or product id or quantity is required")
    );
  const newOrder = await order.create({
    order_date:new Date(),
    shipping_address,
    user_id:req.user.id
  });

  if(newOrder){
    await order_details.create({
      quantity,
      product_id,
      order_id:newOrder.order_id
    })
  }
  else{
    return next(
      new AppError("Failed to add the order")
    );
  }
  return newOrder;
  
};

module.exports = {
  _orderSingleProduct,
  _getOrderDetails
};
