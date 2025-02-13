const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');


const User = sequelize.define('user',{


    id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    name:{
      type:DataTypes.STRING
    },
    deletedAt:{
      type:DataTypes.BOOLEAN
    }
    
},{
  paranoid:true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
  freezeTableName:true,
  modelName:'user',
  
})



module.exports = User