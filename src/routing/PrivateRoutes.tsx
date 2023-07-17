import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";

const PrivateRoutes = () => {
  const { user } = useAuth();
  if (!user)
    // navigate fn will update browser url ergo side effect, won't be pure component in render phase
    return <Navigate to="/login" />;

  return <Outlet />;
};

export default PrivateRoutes;
