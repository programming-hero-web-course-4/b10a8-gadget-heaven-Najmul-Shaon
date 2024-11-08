import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div>
      <Toaster></Toaster>
      <div className="bg-slate-100">
        <NavBar></NavBar>
      </div>
      <div className="min-h-[110vh] container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
