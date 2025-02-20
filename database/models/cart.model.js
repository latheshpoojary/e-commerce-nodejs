const { DataTypes } = require("sequelize");
const { product, user } = require("../config/database.config");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "cart",
    {
      cart_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      product_id: {
        references: product,
        reference_key: "product_id",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        reference: user,
        reference_key: "user_id",
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
    },

    {
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "cart",
      timestamps: true,
    }
  );
};
