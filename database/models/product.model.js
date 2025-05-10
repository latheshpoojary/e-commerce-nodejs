const { DataTypes } = require("sequelize");
const { seller } = require("../config/database.config");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "product",
    {
      product_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      product_name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      price: {
        allowNull: false,
        type: DataTypes.DOUBLE,
        validate: {
          min: 1,
        },
      },
      desc: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 300],
        },
      },
      stock: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
        },
      },
      
      seller_id: {
        references: seller,
        reference_key: "seller_id",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamp: true,
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "product",
    }
  );
};
