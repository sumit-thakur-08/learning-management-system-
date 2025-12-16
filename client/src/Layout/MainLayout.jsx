import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import Sidebar from "../components";

const MainLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-4 bg-gray-100 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
