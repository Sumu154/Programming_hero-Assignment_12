import React from 'react';
import loginLottie from '../assets/Animations/login.json'
import {Helmet} from "react-helmet";
import RegisterForm from '../components/authComponents/RegisterForm';
import Lottie from 'lottie-react';


const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title> auth | Register </title>
      </Helmet>

      <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center mt-24 '>
        <div className='w-[95%] sm:w-[90%] md:w-[60%] '>
        <RegisterForm className=''></RegisterForm>
        </div>
        <Lottie className='w-[60%] md:w-[35%]' animationData={loginLottie} loop={true} />
      </div>
    </div>
  );
};

export default RegisterPage;