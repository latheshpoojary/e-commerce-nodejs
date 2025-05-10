
const {category,specification} = require("../config/database.config");


module.exports = (sequelize, DataTypes) => {
  return sequelize.define("category_specification", {
    category_specification_id:{
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey:true
      },
    categoryRef_id: {
        references: category,
        reference_key: "category_id",
        type: DataTypes.INTEGER,
        allowNull:false
        // references: {
        //     model: category, // This should be the actual table name in your database
        //     key: 'category_id'
        //   }
        
        
    },
    specificationRef_id: {
        references: specification,
        reference_key: "specification_id",
        type: DataTypes.INTEGER,
        allowNull:false
        
        // references: {
        //     model: specification, // This should be the actual table name in your database
        //     key: 'specification_id'
        //   }
        
    },
  });
};
