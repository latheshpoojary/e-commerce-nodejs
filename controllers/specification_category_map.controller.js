const  catchAsync  = require("../utils/catchAsync");
const AppError = require("../utils/appError");

const {category,categorySpecification, specification} = require("../database/config/database.config");

const mapCategorySpecification = catchAsync(async (req, res, next) => {
  const { data } = req.body;
  console.log(data[1],"Data of the body");
  
  if (!data) return next(new AppError("Atleast one mapping is required"));
  for (let i = 0; i <= data.length - 1; i++) {
    console.log(data[i],"First element");
    
    const {category_id,specification_id} = data[i];
    console.log(category_id,specification_id,"Specificationid and category id");
    
    for(let j=0;j<=specification_id.length-1;j++){
      console.log(categorySpecification,"category specification");
      
        await categorySpecification.create({
          
          categoryRef_id:category_id,
          specificationRef_id:specification_id[j]
        })
    }
    
  }
  return res.status(201).json({
    status:"Success",
    message:"Mapped specification to category"
  })
});

const getCategoryList = catchAsync(async (req,res,next)=>{
  const params =req.params;
  const category_id = parseInt(params.category_id);
  console.log(category_id,"category id");
  console.log(categorySpecification);
  
  const allCategorySpecification = await categorySpecification.findAll({
    where:{
      categoryRef_id:category_id
    },
    include:[{
      model:specification,
      attributes:['name']
      
    }],
    attributes:[]
  })
  const specificationNames = allCategorySpecification.map(item => {
    return {
      name:item.specification.name
    }
  });
  return res.status(200).json(specificationNames)
  
})
module.exports = {
  mapCategorySpecification,
  getCategoryList
}