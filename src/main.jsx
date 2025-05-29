import React from "react";
import ReactDOM from "react-dom/client";
import './Style/index.css'
import { createHashRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Home from "./Components/Home.jsx";
import AboutUs from "./Components/AboutUs.jsx"

const router = createHashRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      { path: "/", element: <Home /> },
      { path: "/about", element: <AboutUs /> },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

