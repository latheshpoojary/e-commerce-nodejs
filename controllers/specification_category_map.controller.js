const  catchAsync  = require("../services/catchAsync");
const AppError = require("../services/appError");
const CategorySpecificationMap = require("../database/models/category_specification.model");
const Category = require("../database/models/category.model");
const SpecificationCategory = require("../database/models/specification.model");
const Specification = require("../database/models/specification.model");
const mapCategorySpecification = catchAsync(async (req, res, next) => {
  const { data } = req.body;
  console.log(data[1],"Data of the body");
  
  if (!data) return next(new AppError("Atleast one mapping is required"));
  for (let i = 0; i <= data.length - 1; i++) {
    console.log(data[i],"First element");
    
    const {category_id,specification_id} = data[i];
    console.log(category_id,specification_id,"Specificationid and category id");
    
    for(let j=0;j<specification_id.length-1;j++){
        await CategorySpecificationMap.create({
          
            category_id,
            specification_id:specification_id[j]
        })
    }
    
  }
  return res.status(201).json({
    status:"Success",
    message:"Mapped specification to category"
  })
});

const categorySpecification = catchAsync(async (req,res,next)=>{
  const params =req.params;
  const category_id = parseInt(params.category_id);
  console.log(category_id,"category id");
  
  const allCategorySpecification = await CategorySpecificationMap.findAndCountAll({
    where:{
        category_id
    },
    attributes:['category_id'],
    include:[{
      model:Category,
      as: 'specifications'

    }]
  })
  return res.status(200).json(allCategorySpecification)
  
})
module.exports = {
  mapCategorySpecification,
  categorySpecification
}