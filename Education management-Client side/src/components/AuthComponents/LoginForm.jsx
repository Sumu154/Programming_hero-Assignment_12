import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import { toast } from 'react-toastify';
import { PiEye, PiEyeClosed } from "react-icons/pi";
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';

const LoginForm = () => {
  const { setUser, signInUser, signInWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const [passwordType, setPasswordType] = useState('password');
  const [inputEmail, setInputEmail] = useState('');

  const handleLoginSubmit = async (e) => {
    
  };

  const handleGoogleSignIn = async () => {
    try {
      const res = await signInWithGoogle();
      await axios.post(
        'https://marathon-management-server-side.vercel.app/api/jwt/login', 
        { email: res.user.email }, { withCredentials: true }
      );
      navigate('/');
    } 
    catch (e) {
      toast.error('Google sign-in failed!', { position: "top-center", autoClose: 1000, theme: "dark" });
    }
  };

  const togglePasswordType = () => {
    setPasswordType(passwordType === 'password' ? 'text' : 'password');
  };

  return (
    <div className='max-w-sm mx-auto bg-white mt-14 shadow-lg p-6 rounded-lg'>
      <h3 className='text-center font-semibold text-2xl md:text-3xl'>Login Your Account</h3>
      <p className='text-center mt-2 flex justify-center items-center gap-1'>
        <FcGoogle className='text-xl' />
        Continue with <button onClick={handleGoogleSignIn} className='text-blue-500 underline'>Google</button>
      </p>
      
      <form onSubmit={handleLoginSubmit} className="mt-4">
        <fieldset className="form-control">
          <label className="label"><span className="label-text">Email</span></label>
          <input name='email' type="email" placeholder="Email" className="input input-primary w-full" value={inputEmail} required
            onChange={(e) => setInputEmail(e.target.value)}  />
        </fieldset>

        <fieldset className="form-control mt-2">
          <label className="label"><span className="label-text">Password</span></label>
          <div className='relative'>
            <input name='password' type={passwordType} placeholder="Password" className="input input-primary w-full pr-10" required />
            <span onClick={togglePasswordType} className='absolute right-3 top-3 cursor-pointer'>
              {passwordType === 'password' ? <PiEyeClosed /> : <PiEye />}
            </span>
          </div>
          {/* forget password? */}
          <label className="label">
            <Link to={'/auth/forgetpassword'} state={{ inputEmail }} className="link link-hover text-blue-500"> Forgot password? </Link>
          </label>
        </fieldset>

        <div className="form-control mt-4"> <button className="btn btn-primary w-full">Login</button> </div>

        <p className='text-center text-sm mt-3'> Don’t Have An Account? <Link to='/auth/register' className='text-red-500 ml-1'>Register</Link> </p>
      </form>
    </div>
  );
};

export default LoginForm;
