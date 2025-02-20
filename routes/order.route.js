const {Router} = require('express');
const { authMiddleware } = require('../middlewares/auth.middleware');
const { orderSingleProduct, orderDetails } = require('../controllers/order.controller');
const router = Router();

router.get('/',authMiddleware,orderDetails);
router.post('/',authMiddleware,orderSingleProduct);

module.exports = router