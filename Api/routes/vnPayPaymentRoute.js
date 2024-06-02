const { hashSecretKey } = require('../controllers/vnpayPaymentController');

const router = require('express').Router();

router.post("/create_order", hashSecretKey )

module.exports = router;
