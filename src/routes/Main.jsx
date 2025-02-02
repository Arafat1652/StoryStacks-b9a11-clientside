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
import BookItems from "../components/BookItems/BookItems";
import ViewDetails from "../components/ViewDetails/ViewDetails";
import BorrowedBooks from "../Pages/BorrowedBooks";
import AllBooks from "../Pages/AllBooks";
import UpdateBook from "../components/Update/UpdateBook";

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
        },
        {
          path: '/borrowed',
          element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>
        },
        {
          path:'/all',
          element:<PrivateRoute><AllBooks></AllBooks></PrivateRoute>
        }
      ]
    },
    {
      path: '/bookItem/:category',
      element:<PrivateRoute><BookItems></BookItems></PrivateRoute>,
      loader: ({params})=> fetch(`${import.meta.env.VITE_API_URL}/categories/${params.category}`)
    },
    {
      path: '/details/:id',
      element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
      loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/books/${params.id}`)
    },
    {
      path: '/update/:id',
      element:<PrivateRoute><UpdateBook></UpdateBook></PrivateRoute>
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