import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './component/Shop/Shop.jsx';
import Home from './component/LayOut/Home.jsx';
import Orders from './component/Orders/Orders.jsx';
import Inventory from './component/Inventory/Inventory.jsx';
import LogIn from './component/LogIn/LogIn.jsx';
import cartProductLoader from './Loader/cartProductLoader.js';
import CheckOut from './component/CheckOut/CheckOut.jsx';
import Register from './component/Register/Register.jsx';
import AuthProviders from './component/providers/AuthProviders.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'orders',
        element: <Orders></Orders>,
        loader: cartProductLoader
      },
      {
        path: 'inventory',
        element: <Inventory></Inventory>

      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'checkout',
        element: <CheckOut></CheckOut>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
