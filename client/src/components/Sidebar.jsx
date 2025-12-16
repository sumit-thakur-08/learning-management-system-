import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-indigo-600 text-white p-4">
      <h2 className="text-lg font-bold mb-6">Library Menu</h2>

      <nav className="flex flex-col gap-3">
        <NavLink to="/dashboard">📊 Dashboard</NavLink>
        <NavLink to="/books">📚 All Books</NavLink>
        <NavLink to="/history">🧾 Purchase History</NavLink>
        <NavLink to="/payments">💳 Payments</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;

