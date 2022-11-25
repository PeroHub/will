import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";
import Form from "./components/form/Form";
<<<<<<< HEAD
import Will from "./components/will/Will";
=======
import About from "./components/about/About";
>>>>>>> 576b9a584f4be1f9a42287464a51e31f8fd55691
// import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
<<<<<<< HEAD
    path: "/form/will",
    element: <Will />,
=======
    path: "/about",
    element: <About />,
>>>>>>> 576b9a584f4be1f9a42287464a51e31f8fd55691
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);