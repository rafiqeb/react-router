import { Outlet } from "react-router-dom";
import Navber from "./navber/Navber";
import Footer from "../footer/Footer";


const Header = () => {
    return (
        <div>
            <h1>This is header</h1>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Header;