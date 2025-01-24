import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
