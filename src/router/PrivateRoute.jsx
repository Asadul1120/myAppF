// import { Navigate } from "react-router-dom";
// import { useAuth } from "../AuthContext";
// import { toast } from "react-toastify";

// function PrivateRoute({ children }) {
//   const { auth, loading } = useAuth();


//   if (loading) return <div>Loading...</div>;

 
//   if (!auth?.user) {

//     toast.error("You are not authorized to access this page. Please log in.");

//     return <Navigate to="/login" />;
//   }

//   return children;
// }

// export default PrivateRoute;



import { Navigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import { toast } from "react-toastify";
import { useEffect } from "react";

function PrivateRoute({ children }) {
  const { auth, loading } = useAuth();

  useEffect(() => {
    if (!loading && !auth?.user) {
      toast.error("You must log in to access this page.");
    }
  }, [loading, auth]);

  if (loading) return <div>Loading...</div>;

  return auth?.user ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;
