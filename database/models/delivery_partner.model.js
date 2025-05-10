
module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      "delivery_partner",
      {
        deliver_partner_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        company_name:{
          type:DataTypes.STRING,
          allowNull:false
        },
        email:{
          type:DataTypes.STRING,
          unique:true,
          allowNull:false
        },
      
        phone:{
          type:DataTypes.BIGINT,
          allowNull:false
          
        },
      
        pincode:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        city:{
            type:DataTypes.STRING
        },
  
        deletedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        paranoid: true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
        freezeTableName: true,
        modelName: "delivery_partner",
        timestamp:true
      }
    );
  };
  