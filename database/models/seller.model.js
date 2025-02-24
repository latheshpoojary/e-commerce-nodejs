module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "seller",
    {
      seller_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      company_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },

      phone: {
        type: DataTypes.BIGINT,
      },

      pincode: {
        type: DataTypes.INTEGER,
      },
      city: {
        type: DataTypes.STRING,
      },
      deletedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
      freezeTableName: true,
      modelName: "seller",
    }
  );
};
