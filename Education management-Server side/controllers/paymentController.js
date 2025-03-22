const stripe = require('stripe')(process.env.PAYMENT_GATEWAY_SK);

const getPaymentIntent = async (req, res) => {
  const { course_price } = req.body;
  //console.log(course_price);
  const amount = parseInt(course_price * 100);

  try{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd', 
      payment_method_types: ['card'],
    });

    //console.log(paymentIntent);
    res.status(200).json({
      transaction_id: paymentIntent.id, // Transaction ID
      client_secret: paymentIntent.client_secret, // Client Secret
    });
  }
  catch(e){
    res.status(500).json({ error: e.message });
  }
}

module.exports = { getPaymentIntent };

