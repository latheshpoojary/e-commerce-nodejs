const {Router} = require('express');
const { addProduct, getProductDetails } = require('../controllers/product.controller');
const router=Router();

router.get('/:product_id',getProductDetails)
router.post('/',addProduct)

module.exports = router;