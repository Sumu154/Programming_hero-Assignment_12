const stripe = require('stripe')(process.env.PAYMENT_GATEWAY_SK);

const makePaymentIntents = async (req, res) => {
  const { course_price } = req.body;
  console.log(course_price);
  const amount = parseInt(course_price * 100);

  try{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd', 
      payment_method_types: ['card'],
    });

    console.log(paymentIntent);
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  }
  catch(e){
    res.status(400).json({ error: e.message });
  }
}

module.exports = { makePaymentIntents };

