import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import NotFound from "../components/NotFound";
import ServicesDetails from "../pages/ServicesDetails";
import AdminChat from "../pages/AdminChat";
import UserChat from "../pages/UserChat";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../pages/Dashboard";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        index: true,
        element: <HomePage />,
      },
      {
        path: "/userchat",
        element: (
          <PrivateRoute>
            <UserChat />
          </PrivateRoute>
        ),
      },
      {
        path: "/adminchat",
        element: (
          <AdminRoute>
            <AdminChat />
          </AdminRoute>
        ),
      },
      {
        path: "/services/:id",
        element: <ServicesDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: (
          <AdminRoute>
            <Dashboard />
          </AdminRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
