import React from 'react';
import { Helmet } from 'react-helmet';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from '../components/paymentComponents/PaymentForm';
import { useParams } from 'react-router-dom';


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK)
const ClassPaymentPage = () => {

  const { id } = useParams();
  console.log(id);
  
  return (
    <div className='mt-32 mb-16'>
      <Helmet>
        <title> Class | payment </title>
      </Helmet>

      <div>
        <h3 className='text-center font-Montserrat text-xl sm:text-2xl lg:text-3xl text-dark/90 font-semibold mb-8'> Please pay to enroll </h3>
        
        <Elements stripe={stripePromise}>
          <PaymentForm></PaymentForm>
        </Elements>
      </div>
    </div>
  );
};

export default ClassPaymentPage;