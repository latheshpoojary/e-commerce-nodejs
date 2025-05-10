
const {product,specification} = require("../config/database.config");


module.exports = (sequelize, DataTypes) => {
  return sequelize.define("product_specification", {
    product_specification_id:{
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey:true
      },
    spec_value:{
        type:DataTypes.STRING,
        validate:{
            min:1
        }
    },
    product_id: {
        references: product,
        reference_key: "product_id",
        type: DataTypes.INTEGER,
        allowNull:false
       
        
        
    },
    specificationRef_id: {
        references: specification,
        reference_key: "specification_id",
        type: DataTypes.INTEGER,
        allowNull:false
        
    },
  });
};
