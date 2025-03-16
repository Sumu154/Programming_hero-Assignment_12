const express = require('express');
const router = express.Router();
const { getPaymentIntent } = require('../controllers/paymentController');

router.post('/create-payment-intent', getPaymentIntent);


module.exports = router;