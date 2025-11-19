import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./AuthContext.jsx";
import router from "./router/router.jsx";


import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// import "./index.css";
// import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      
       {/* Toast Container Must Be Inside AuthProvider But Outside Router */}
      <ToastContainer
        position="top-center"
        autoClose={2500}
        theme="dark"
        pauseOnHover={false}
      />

    </AuthProvider>
  </StrictMode>
);
