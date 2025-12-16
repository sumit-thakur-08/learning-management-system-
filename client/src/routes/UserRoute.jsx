import { Route } from "react-router-dom";
import UserDashboard from "../pages/user/UserDashboard";

const UserRoutes = () => {
  return (
    <Route path="/user/dashboard" element={<UserDashboard />} />
  );
};

export default UserRoutes;
