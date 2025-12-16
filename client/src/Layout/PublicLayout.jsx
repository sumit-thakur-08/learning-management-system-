import { Outlet } from "react-router-dom";
import { Navbar } from "../components";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-[calc(100vh-56px)]">
        <Outlet />
      </div>
    </>
  );
};

export default PublicLayout;
