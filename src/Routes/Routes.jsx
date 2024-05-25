import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AddReviews from "../Pages/AddReviews/AddReviews";
import AllProducts from "../Pages/AllProducts/AllProducts";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'login',
            element: <Login></Login>
        },
        {
            path: 'signup',
            element: <SignUp></SignUp>
        },
        {
          path: 'allProducts',
          element: <AllProducts></AllProducts>
        },
        {
          path: 'products/:id',
          element: <ProductDetails></ProductDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        },
        {
          path: 'reviews/:id',
          element: <AddReviews></AddReviews>,
          loader: ({params}) => fetch(`http://localhost:5000/products/${params.id}`)
        }
      ]
    },
  ]);