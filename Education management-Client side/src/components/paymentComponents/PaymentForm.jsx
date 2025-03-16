import React, { useContext, useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Lottie from 'lottie-react';
import { MdOutlinePayment } from "react-icons/md";

import processingL from '../../assets/Animations/processing.json'
import Swal from 'sweetalert2';
import { getPaymentIntent } from '../../apis/paymentApi';
import { createEnrollment } from '../../apis/enrollmentApi';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { getTeacherName } from '../../apis/courseApi';


const PaymentForm = ( { course_id, course_price } ) => {
  const { user } = useContext(AuthContext);
  const user_email = user.email;

  const stripe = useStripe();
  const elements = useElements();
  
  const [ error, setError ] = useState(null);
  const [ processing, setProcessing ] = useState(false);
  const [ success, setSuccess ] = useState(false);



  const handlePayment = async (e) => {
    e.preventDefault();
    setProcessing(true);

    if(!stripe || !elements){
      setError("Stripe is not loaded");
      setProcessing(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);
    if(!cardElement){
      setError("Card details are not entered properly.");
      setProcessing(false);
      return;
    }


    try{
      // 1) clientSecret key ta generate 
      const data = await getPaymentIntent(course_price);
      const clientSecret = data.client_secret;
      const transactionId = data.transaction_id;
      //console.log(clientSecret, transactionId);
    

      
      // 2) confirm payment with stripe
      const { error:confirmError, paymentIntent  } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { 
          card: cardElement,
          billing_details: {
            email: user_email,

          }
        },
      });

      // 3) confirm payment 
      if(confirmError) {
        setError(confirmError.message);
      } 
      else{
        //console.log("Payment Method:", paymentIntent.payment_method);
        setError(null);

        const enrollment = { user_email, course_id, order_transaction_id:transactionId  };

        // database e store on database
        try{
          // enrollment database e store -> kon user kon kon course enroll korce + oi courser transaction_id
          const res = await createEnrollment(enrollment);
          //console.log(res.data);
        }
        catch(e){
          // //console.log('e', e.status);
          if(e.response.status === 400){
            toast.error('You have already enrolled this course!', {
              position: "top-center",
              autoClose: 1000,
              theme: "dark",
            });
          }
          setProcessing(false);
          return;
        }

        // payment successful hole ja korbo
        setSuccess(true);
        Swal.fire({
          title: "Thank You! Payment Completed.",
          icon: "success",
          customClass: {
            popup: 'small-modal'
          }
        });
      }
    } 
    catch (e) {
      console.error("Error fetching clientSecret:", e);
    }

    setProcessing(false);
  }

  return (
    <div className='max-w-[420px] px-4 mx-auto '>
      <form className='' onSubmit={handlePayment}>
        <CardElement className=' border-[1px] border-dark/15 px-4 py-3 rounded-[2px] '></CardElement>

        <div className=' w-full '>
          { processing ? <Lottie animationData={processingL} loop={true} > </Lottie> 
          : <button type='submit' className='w-full flex gap-2 justify-center items-center text-white bg-purple hover:bg-purple/90 font-medium mt-8 py-[6px] rounded-[2px] '> <span className='mb-[2px] '> Pay now </span> <MdOutlinePayment className='text-2xl ' /> </button> }
          </div> 
      </form>

      {error && <p className="text-sm text-redd mt-2">{error}</p>}
      {success && <p className="text-sm text-dollargreen mt-2"> Payment Successful!</p>}
    </div>
  );
};

export default PaymentForm;