import { createBrowserRouter } from "react-router-dom";
import axios from "axios";


import PrivateRoute from "./PrivateRoutes";

// layout import
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

//import components
import Error from "../components/shared/Error";


// import pages
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AllClassesPage from "../pages/AllClassesPage";
import DetailsClassPage from "../pages/DetailsClassPage";
import TeachEducairPage from "../pages/TeachEducairPage";
import ProfilePage from "../pages/ProfilePage";
import StudentClassPage from "../pages/StudentClassPage";
import StudentAssignmentPage from "../pages/StudentAssignmentPage";
import TeacherAddClassPage from "../pages/TeacherAddClassPage";
import TeacherClassPage from "../pages/TeacherClassPage";
import TeacherClassDetailsPage from "../pages/TeacherClassDetailsPage";
import AdminClassPage from "../pages/AdminClassPage";
import AdminUsersPage from "../pages/AdminUsersPage";
import AdminTeachersPage from "../pages/AdminTeachersPage";
import TeacherClassUpdatePage from "../pages/TeacherClassUpdatePage";
import axiosInstance from "../config/axiosInstance";
import { getCourseById } from "../apis/courseApi";




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
        loader: async ( {params} ) => {
          const res = await getCourseById(params.id);
          return res;
        }
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
      // student dashboard links
      {
        path: "/dashboard/studentClasses",
        element: <PrivateRoute> <StudentClassPage></StudentClassPage>  </PrivateRoute>
      },
      {
        path: "/dashboard/studentAssignments",
        element: <PrivateRoute> <StudentAssignmentPage></StudentAssignmentPage> </PrivateRoute>
      },
      // teacher dashboard links
      {
        path: "/dashboard/addClass",
        element: <PrivateRoute> <TeacherAddClassPage></TeacherAddClassPage>  </PrivateRoute>
      },
      {
        path: "/dashboard/teacherClasses",
        element: <PrivateRoute> <TeacherClassPage></TeacherClassPage>  </PrivateRoute>
      },
      {
        path: "/dashboard/teacherClasses/:id",
        element: <PrivateRoute> <TeacherClassDetailsPage></TeacherClassDetailsPage>  </PrivateRoute>
      },
      {
        path: "/dashboard/teacherUpdateClasses/:id",
        element: <PrivateRoute> <TeacherClassUpdatePage></TeacherClassUpdatePage>  </PrivateRoute>,
        loader: ({params}) => {
          return params.id;
        }
      },
      //Admin dashboard links
      {
        path: "/dashboard/adminClasses",
        element: <PrivateRoute> <AdminClassPage></AdminClassPage>   </PrivateRoute>
      },
      {
        path: "/dashboard/adminUsers",
        element: <PrivateRoute> <AdminUsersPage></AdminUsersPage>   </PrivateRoute>
      },
      {
        path: "/dashboard/adminTeachers",
        element: <PrivateRoute> <AdminTeachersPage></AdminTeachersPage>   </PrivateRoute>
      },
      
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);

export default router;