const {Router} = require('express');
const { getAllUser } = require('../controllers/user.controller');
const router = Router();

router.get('/',getAllUser)


module.exports = router