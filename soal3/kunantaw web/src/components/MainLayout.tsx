import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function MainLayout() {
  return (
    <div className=" w-svw min-h-screen bg-[#F1F1EB] flex flex-col ">
      <Navbar />
      <main className=" grow ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
