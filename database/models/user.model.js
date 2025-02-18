const {address} = require('../config/database.config')

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user",
    {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.INTEGER,
      },
      addressId: {
        references: address,
        reference_key: "address_id",
        type: DataTypes.INTEGER,
        allowNull: true,
        // references: {
        //   model: address,
        //   key: "address_id",
        // },
        // type:DataTypes.ARRAY(DataTypes.INTEGER)/
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "user",
      
    }
  );
};
