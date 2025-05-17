import React from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Homepage from "../Pages/Home/Homepage";
import Shoppage from "../Pages/Shop/Shoppage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home" replace />,
    errorElement: <ErrorPage />
  },
  {
    path: "/home",
    element: <Homepage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/shop",
    element: <Shoppage />,
    errorElement: <ErrorPage />
  }
]);

// Create a proper error component
function ErrorPage() {
  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>404 Not Found</p>
    </div>
  );
}

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;