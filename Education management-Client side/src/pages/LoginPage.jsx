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

      {/* <div className='w-[90%] bg-red-700 mx-auto flex justify-between items-center mt-24 '>
        <LoginForm  ></LoginForm>
        <Lottie className='w-[35%] ' animationData={loginLottie} loop={true} />
      </div> */}
      <LoginForm></LoginForm>
    </div>
  );
};

export default LoginPage;