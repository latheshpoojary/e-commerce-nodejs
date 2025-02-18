
module.exports = (sequelize,DataTypes)=>{
  return sequelize.define('specification',{

    specification_id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        autoIncrement:true,
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }

    

},{
    paranoid:true, //actual data will not be deleted from the table;only work when the deleteAt field present in the table
    freezeTableName:true,
    modelName:'specification',
    
  })

};