const express = require('express');
const router = express.Router();
const { makePaymentIntents } = require('../controllers/paymentController');

router.post('/create-payment-intent', makePaymentIntents);


module.exports = router;