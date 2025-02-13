const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');
const Address = require('./address.model');

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
    email:{
      type:DataTypes.STRING,
      unique:true
    },
    password:{
      type:DataTypes.STRING,
    },
    phone:{
      type:DataTypes.NUMBER,
      
    },
    address:{
      references:{
        model:Address,
        key:'id'
      },
      type:DataTypes.ARRAY(DataTypes.NUMBER),
      allowNull:true
    },
    deletedAt:{
      type:DataTypes.DATE
    }
    
},{
  paranoid:true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
  freezeTableName:true,
  modelName:'user',
  
})

User.sync()
  .then(() => {
    console.log('User model synced');
  })
  .catch(error => {
    console.error('Error syncing User model:', error);
  });


module.exports = User