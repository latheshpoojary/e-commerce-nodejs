const { where } = require('sequelize');
const {cartTable, product, seller} = require('../database/config/database.config')


const _getCartDetails = async (req,next)=>{
    console.log(req.user);
    
    const userCart = await cartTable.findAll({
        where:{
            user_id:req.user.id
        },
        include:[{
            model:product,
            attributes: { 
                exclude: ['seller_id','deletedAt'] 
              },
            include:[
                {
                    model:seller,
                    attributes: { 
                        exclude: ['password','deletedAt'] 
                      },
                }
            ]
        }],
        attributes:{
            exclude:['product_id','user_id','deletedAt']
        }
    })
    return userCart
}
const _addCart = async (req,next)=>{

    const {product_id,quantity} = req.body;
    const newCart = await cartTable.create({
        product_id,
        quantity,
        user_id:req.user.id
    })
    return newCart
}

module.exports = {
    _addCart,
    _getCartDetails
}