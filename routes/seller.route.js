const {Router} = require('express');
const { onBoardSeller } = require('../controllers/seller.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');

const router = Router();

router.post('/onBoard',authMiddleware,onBoardSeller)

module.exports = router