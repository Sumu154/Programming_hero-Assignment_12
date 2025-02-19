import { createBrowserRouter } from "react-router-dom";



// layout import
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";


// import pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";


//import components
import Error from "../components/shared/Error";



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      }
    ]

  },
  {
    path: "/auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: '/auth/login',
        element: <LoginPage></LoginPage>
      },
      {
        path: '/auth/register',
        element: <RegisterPage></RegisterPage>
      }
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;