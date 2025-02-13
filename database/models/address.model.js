const { DataTypes } = require('sequelize');
const sequelize = require('../config/database.config');


const Address = sequelize.define('address',{


    id:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type:DataTypes.INTEGER
    },
    pincode:{
        type:DataTypes.STRING
    },
    city:{
        type:DataTypes.STRING
    },
    state:{
        type:DataTypes.STRING
    },
    house_name:{
        type:DataTypes.STRING
    },
    deletedAt:{
      type:DataTypes.BOOLEAN
    }
    
},{
  paranoid:true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
  freezeTableName:true,
  modelName:'address',
  timestamps:true
  
})


Address.sync()
  .then(() => {
    console.log('Address Model synced');
  })
  .catch(error => {
    console.error('Error syncing Address model:', error);
  });



module.exports = Address