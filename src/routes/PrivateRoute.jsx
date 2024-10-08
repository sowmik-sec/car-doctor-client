import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-spinner text-success loading-lg"></span>
      </div>
    );
  if (!user)
    return <Navigate state={location.pathname} to={"/login"} replace />;
  return children;
}

export default PrivateRoute;
