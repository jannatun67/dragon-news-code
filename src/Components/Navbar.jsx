import { Link } from "react-router-dom";
import userIcon from "../assets/assets/user.png"
 
const Navbar = () => {
    return (
        <div className="flex justify-between items-center">
            <div></div>
            <nav className="space-x-7 text-gray-400">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/career">Career</Link>
            </nav>
            <div className="flex gap-2 items-center">
                <div>
                    <img src={userIcon} alt="" />
                </div>
                <Link to="/auth/login" className="btn btn-neutral rounded-none">Login</Link>
            </div>
        </div>
    );
};

export default Navbar;