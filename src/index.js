import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import App from './App';
import Login from './pages/login';
import Signup from './pages/signup';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/loginPage",
    element: <Login/>,
  },
  {
    path: "/signupPage",
    element: <Signup/>,
  },
  

]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <HelmetProvider>
    <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
reportWebVitals();
