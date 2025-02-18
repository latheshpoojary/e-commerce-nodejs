const {Router} = require('express');
const { create } = require('../controllers/category.controller');

const router = Router();


router.get('/')
router.post('/',create)

module.exports = router;