const {Router} = require('express');
const {addCart, getCartDetails} = require('../controllers/cart.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = Router();

router.get('/',authMiddleware,getCartDetails);
router.post('/',authMiddleware,addCart);

module.exports = router