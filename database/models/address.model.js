const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "address",
    {
      address_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      pincode: {
        type: DataTypes.STRING,
        required:true
      },
      city: {
        type: DataTypes.STRING,
      },
      state: {
        type: DataTypes.STRING,
        required:true
      },
      house_name: {
        type: DataTypes.STRING,
      },
      deletedAt: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "address",
      timestamps: true,
    }
  );
};

