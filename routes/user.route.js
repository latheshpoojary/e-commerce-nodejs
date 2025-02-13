const {Router} = require('express');
const { getAllUser, register } = require('../controllers/user.controller');
const router = Router();

router.get('/',getAllUser)
router.post('/register',register)


module.exports = router