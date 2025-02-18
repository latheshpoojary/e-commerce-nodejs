const {Router} = require('express');
const { mapCategorySpecification, categorySpecification } = require('../controllers/specification_category_map.controller');


const router = Router();
router.get('/:category_id',categorySpecification)
router.post('/',mapCategorySpecification);

module.exports = router;