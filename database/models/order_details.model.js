const { user, order, product } = require("../config/database.config");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "order_details",
    {
      order_details_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      quantity: {
        type: DataTypes.INTEGER,
      },
      discount: {
        type: DataTypes.DOUBLE,
        defaultValue:0
      },
      weight: {
        type: DataTypes.INTEGER,
      },

      product_id: {
        references: product,
        reference_key: "product_id",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      order_id:{
        references: order,
        reference_key: "order_id",
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    },

    {
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "order_details",
      timestamps: true,
    }
  );
};
