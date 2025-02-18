    
    
    const Category = require('../models/category.model');
    const Specification = require('../models/specification.model');

   


    module.exports = (sequelize,DataTypes)=>{
        return sequelize.define('category_specification',{
       

        

            categoryRef_id:{
               references:Category,
               referencesKey:'id',
                type:DataTypes.INTEGER,
               
            },
            specificationRef_id:{
                references:{
                    model:Specification,
                    key:'id'
                },
                type:DataTypes.INTEGER,
                
            }
        })
    }