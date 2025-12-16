import { Routes, Route, Navigate } from "react-router-dom";
import PublicLayout from "../Layout/PublicLayout";
import Login from "../pages/auth/Login";
import Signup from "../pages/auth/Signup";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AuthRoutes;
