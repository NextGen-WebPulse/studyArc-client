import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navbar";

const MainLayout = () => {
  return (
    <div className="min-h-dvh">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
