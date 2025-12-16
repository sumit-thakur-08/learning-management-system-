import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow p-4">
      <h2 className="text-xl font-bold mb-6">📚 LMS</h2>

      <nav className="space-y-3">
        <Link to="/user/dashboard">Books</Link>
        <Link to="/user/profile">Profile</Link>
        <Link to="/logout" className="text-red-500">Logout</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
