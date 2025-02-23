import { createBrowserRouter } from "react-router-dom";
import axios from "axios";


import PrivateRoute from "./PrivateRoutes";

// layout import
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";


// import pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllClassesPage from "../pages/AllClassesPage";
import DetailsClassPage from "../pages/DetailsClassPage";
import TeachEducairPage from "../pages/TeachEducairPage";
import ProfilePage from "../pages/ProfilePage";

//import components
import Error from "../components/shared/Error";
import StudentClassPage from "../pages/StudentClassPage";
import StudentAssignmentPage from "../pages/StudentAssignmentPage";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <HomePage></HomePage>
      },
      {
        path: '/classes',
        element: <AllClassesPage></AllClassesPage>
      },
      {
        path: '/classes/:id',
        element: <PrivateRoute> <DetailsClassPage></DetailsClassPage> </PrivateRoute>,
        // loader: async ( {params} ) => {
        //   const res = await axios.get(`https://marathon-management-server-side.vercel.app/api/marathons/${params.id}`, {withCredentials: true});
        //   const class =  res.data;
        //   return class;
        // }
      },
      {
        path: '/teachEducair',
        element: <PrivateRoute> <TeachEducairPage></TeachEducairPage> </PrivateRoute>
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
    element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
    children: [
      {
        path: "/dashboard", 
        element: <PrivateRoute> <ProfilePage></ProfilePage> </PrivateRoute>
      },
      {
        path: "/dashboard/studentClasses",
        element: <PrivateRoute> <StudentClassPage></StudentClassPage>  </PrivateRoute>
      },
      {
        path: "/dashboard/studentAssignments",
        element: <PrivateRoute> <StudentAssignmentPage></StudentAssignmentPage> </PrivateRoute>
      }
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;