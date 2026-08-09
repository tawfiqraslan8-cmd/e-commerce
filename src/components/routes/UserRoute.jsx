import { Navigate, Outlet } from "react-router-dom";
import UseAuthStore from "../../store/UseAuthStore";

export default function UserRoute() {
  const { token } = UseAuthStore();

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}