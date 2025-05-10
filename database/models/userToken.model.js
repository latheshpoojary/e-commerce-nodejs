const { user } = require("../config/database.config");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "user_token",
    {
      token_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      userId: {
        reference: user,
        reference_key: "user_id",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      refreshToken: {
        type: DataTypes.STRING,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "user_token",
    }
  );
};
