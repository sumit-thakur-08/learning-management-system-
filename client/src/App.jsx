import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Login, Signup } from "./pages/auth";
import UserDashboard from "./pages/user/UserDashboard";
import AdminDashboard from "./pages/admin/AdminDashboard";
import { Navbar } from "./components";
import ProtectedRoute from "./routes/ProtectedRoute";
import Forbidden from "./pages/Forbidden";




function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forbidden" element={<Forbidden />} />
        {/* User Only */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute allowedRoles={["user"]}>
              <UserDashboard />
            </ProtectedRoute>
          }
        />

        {/* Admin Only */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
