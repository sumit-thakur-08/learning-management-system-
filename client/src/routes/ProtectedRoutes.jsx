import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import MainLayout from "../Layout/MainLayout";

import Books from "../pages/books/Books";
import UserDashboard from "../pages/user/UserDashboard";
import History from "../pages/history/PurchaseHistory";

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute allowedRoles={["user", "admin"]}>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books" element={<Books />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/history" element={<History />} />
      </Route>
    </Routes>
  );
};

export default ProtectedRoutes;
