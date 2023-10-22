import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from "./Layout/MainLayout";
import Home from './Pages/FullHome/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      
    ]
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<div className=" max-w-7xl mx-auto">
<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
</div>
);
