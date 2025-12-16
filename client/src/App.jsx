import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login, Signup } from "./pages/auth";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProtectedRoutes from "./routes/ProtectedRoute";
import Forbidden from "./pages/Forbidden";
import PublicLayout from "./Layout/PublicLayout";

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
          <ProtectedRoutes allowedRoles={["user"]}>
            <UserDashboard />
          </ProtectedRoutes>
        }
      />

      {/* 🛠 Admin Dashboard */}
      <Route
        path="/admin"
        element={
          <ProtectedRoutes allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoutes>
        }
      />

    </Routes>
  );
}

export default App;
