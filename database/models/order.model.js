
const {  user } = require("../config/database.config");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "order",
    {
      order_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      order_date: {
        type: DataTypes.DATE,
      },
      estimated_date: {
        type: DataTypes.DATE,
      },
      delivery_date: {
        type: DataTypes.DATE,
      },
      shipping_address: {
        type: DataTypes.STRING,
      },
      
      user_id: {
        reference: user,
        reference_key: "user_id",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },

    {
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "order",
      timestamps: true,
    }
  );
};
