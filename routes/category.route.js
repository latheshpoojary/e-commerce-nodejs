const {Router} = require('express');
const { create, getAllCategory } = require('../controllers/category.controller');

const router = Router();


router.get('/',getAllCategory)
router.post('/',create)

module.exports = router;