const makePaymentIntents = async (req, res) => {
  const { price } = req.body;
  const amount = parseInt(price * 100);

  try{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: 'usd', 
      payment_method_types: ['card'],
    });
    
    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  }
  catch(e){
    res.status(400).json({ error: e.message });
  }
}

module.exports = { makePaymentIntents };

