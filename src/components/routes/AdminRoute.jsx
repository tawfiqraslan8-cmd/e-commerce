import { Navigate, Outlet } from "react-router-dom";
import UseAuthStore from "../../store/UseAuthStore";

export default function AdminRoute() {
  const { token, userRole } = UseAuthStore();

  if (!token || userRole !== "admin") {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}