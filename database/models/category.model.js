const { category } = require("../config/database.config");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "category",
    {
      category_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull:false
      },
      desc: {
        type: DataTypes.STRING,
      },
      parent_category_id:{ 
        references: category,
        reference_key: 'category_id',
        type: DataTypes.INTEGER,
        allowNull: true,
        
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "category",
    }
  );
};
