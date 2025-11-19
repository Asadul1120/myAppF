
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";

function AdminRoute({ children }) {
  const { auth, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // refresh এ wait করবে

  if (!auth?.token || auth?.user?.role !== "admin") {

    toast.error("You are not authorized to access this page.");

    return <Navigate to="/login" />;

  }

  return children;
}

export default AdminRoute;
