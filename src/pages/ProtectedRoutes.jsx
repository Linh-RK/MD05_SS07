import React, { useState } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoutes({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  return <>{!isLogin ? <Navigate to="/home" /> : children}</>;
}
