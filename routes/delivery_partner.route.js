const {Router} = require('express');
const { deliveryPartnerOnBoard } = require('../controllers/deliveryPartner.controller');

const router = Router();


router.post('/', deliveryPartnerOnBoard)

module.exports = router;