import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../Pages/Home";
import Root from "../components/Root/Root";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import AddBook from "../Pages/AddBook";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

  const router = createBrowserRouter([
    
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            index: true,
            element: <Home></Home>
        },
        {
          path: '/add',
          element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
        }
      ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>
    }
  ]);

  export default router