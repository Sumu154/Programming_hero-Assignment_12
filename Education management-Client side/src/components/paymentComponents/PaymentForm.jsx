import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Lottie from 'lottie-react';
import { MdOutlinePayment } from "react-icons/md";

import processingL from '../../assets/Animations/processing.json'
import Swal from 'sweetalert2';
import { makePaymentIntents } from '../../apis/paymentApi';


const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  
  const [ error, setError ] = useState(null);
  const [ processing, setProcessing ] = useState(false);
  const [ success, setSuccess ] = useState(false);
  const [ clientSecret, setClientSecret ] = useState("");

  useEffect(() => {
    const fetchClientSecret = async () => {
      try{
        if(price){
          const secret = await makePaymentIntents(price);
          setClientSecret(secret);
        }
      } 
      catch (e) {
        console.error("Error fetching clientSecret:", e);
      }
    };
  
    fetchClientSecret();
  }, [])

  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if(!stripe || !elements){
      setError("Stripe is not loaded");
      setProcessing(false);
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if(error) {
      setError(error.message);
      setProcessing(false);
    } 
    else {
      console.log("Payment Method:", paymentMethod);
      setSuccess(true);
      setError(null);

      Swal.fire({
        title: "Thank You! Payment Completed.",
        icon: "success",
        customClass: {
          popup: 'small-modal'
        }
      })
    }

    setProcessing(false);

  }

  return (
    <div className='max-w-[420px] mx-auto '>
      <form className='' onSubmit={handlePayment}>
        <CardElement className=' border-[1px] border-dark/15 px-4 py-3 rounded-[2px] '></CardElement>

        <div className=' w-full '>
          { processing ? <Lottie animationData={processingL} loop={true} > </Lottie> 
          : <button type='submit' className='w-full flex gap-2 justify-center items-center text-white bg-purple font-medium mt-8 py-[6px] rounded-[2px] '> <span className='mb-[2px] '> Pay now </span> <MdOutlinePayment className='text-2xl ' /> </button> }
          </div> 
      </form>

      {error && <p className="text-sm text-redd mt-2">{error}</p>}
      {success && <p className="text-sm text-dollargreen mt-2"> Payment Successful!</p>}
    </div>
  );
};

export default PaymentForm;