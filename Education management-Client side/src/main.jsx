import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import { RouterProvider } from "react-router-dom";
import { ToastContainer } from 'react-toastify'

import router from './routes/router.jsx';
import LoadingProvider from './contexts/LoadingProvider.jsx';
import AuthProvider from './contexts/AuthProvider.jsx';
import CourseProvider from './contexts/CourseProvider.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoadingProvider>  <AuthProvider> <CourseProvider>
      <RouterProvider router={router} />
      <ToastContainer />
      </CourseProvider> </AuthProvider>  </LoadingProvider>
  </StrictMode>,
)
