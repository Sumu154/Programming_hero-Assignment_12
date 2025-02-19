import React from 'react';
import loginLottie from '../assets/Animations/login.json'
import {Helmet} from "react-helmet";
import LoginForm from '../components/AuthComponents/LoginForm';
import Lottie from 'lottie-react';

const LoginPage = () => {
  return (
    <div>
      <Helmet>
        <title> auth | Login </title>
      </Helmet>

      <div className='w-[80%] mx-auto flex flex-col-reverse md:flex-row justify-between items-center mt-24 '>
        <div className='w-[95%] sm:w-[90%] md:w-[60%] '>
        <LoginForm className=''></LoginForm>
        </div>
        <Lottie className='w-[60%] md:w-[35%]' animationData={loginLottie} loop={true} />
      </div>
    </div>
  );
};

export default LoginPage;