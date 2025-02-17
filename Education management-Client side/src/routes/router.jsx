import { createBrowserRouter } from "react-router-dom";



// layout import
import MainLayout from "../layouts/MainLayout";


// import pages
import HomePage from "../pages/HomePage";



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
]);

export default router;