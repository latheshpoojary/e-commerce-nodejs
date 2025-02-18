const {Router} = require('express');
const { getAllUser, register, login } = require('../controllers/user.controller');
const { authMiddleware } = require('../middlewares/auth.middleware');
const router = Router();

router.get('/',getAllUser)
router.post('/register',register)
router.post('/login',login)


module.exports = router