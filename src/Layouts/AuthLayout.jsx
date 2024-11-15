import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
        <div className=" bg-[#F3F3F3]">
          <header className="w-10/12 mx-auto font-poppins pt-5">
            <Navbar></Navbar>
          </header>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;