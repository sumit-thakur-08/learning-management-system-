import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login, Signup } from "./pages/auth";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import Forbidden from "./pages/Forbidden";
import PublicLayout from "./layouts/PublicLayout";

function App() {
  return (
    <Routes>

      {/* 🌐 Public Pages with Navbar */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>

      <Route path="/forbidden" element={<Forbidden />} />

      {/* 👤 User Dashboard */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute allowedRoles={["user"]}>
            <UserDashboard />
          </ProtectedRoute>
        }
      />

      {/* 🛠 Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default App;
