import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";

function PrivateRoute({ children }) {
  const { auth, loading } = useAuth();


  if (loading) return <div>Loading...</div>;

 
  if (!auth?.user) return <Navigate to="/login" />;

  return children;
}

export default PrivateRoute;
