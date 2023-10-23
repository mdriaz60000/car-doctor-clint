import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Home from './Pages/FullHome/Home/Home';
import Login from './Pages/Login/Login';
import Resister from './Pages/Register/Resister';
import AuthProvider from "./Pages/Provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Resister></Resister>,
      },
      
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<div className=" max-w-7xl mx-auto">
<React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>
</div>
);
