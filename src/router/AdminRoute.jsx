
import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function AdminRoute({ children }) {
  const { auth, loading } = useAuth();

  if (loading) return <div>Loading...</div>; // refresh এ wait করবে

  if (!auth?.token || auth?.user?.role !== "admin") {

 alert("You are not authorized to access this page. Please log in as an admin.");

    return <Navigate to="/login" />;

  }

  return children;
}

export default AdminRoute;
