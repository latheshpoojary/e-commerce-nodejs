const { category } = require("../database/config/database.config");


const _getAllCategory = async (req,next)=>{
    const categories = await category.findAll({
        
    });
    return categories;
}

const _create = async (req,next)=>{
    const newCategory = await category.create(req.body);
    return newCategory;
}

module.exports = {
    _getAllCategory,
    _create
}