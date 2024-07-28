import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./pages/Navbar";
import HomePage from "./pages/HomePage";
import Events from "./pages/Events";
import Register from "./pages/Register";
import UserProfile from "./pages/UserProfile";
import Footer from "./pages/footer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/eventos",
      element: <Events />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/UserProfile",
      element: <UserProfile />,
    },
  ]);

  return (
    <div>
      <Navbar /> {/* Componente de la barra de navegación */}
      <RouterProvider router={router} />
      <Footer /> {/* Componente del pie de página */}
    </div>
  );
};

export default App;
