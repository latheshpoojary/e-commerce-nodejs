
const {  user } = require("../config/database.config");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "order",
    {
      role_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
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
