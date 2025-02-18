const {Router } = require('express');
const {addAddress } = require('../controllers/address.controller');

const router = Router();

router.post('/',addAddress)

module.exports = router;