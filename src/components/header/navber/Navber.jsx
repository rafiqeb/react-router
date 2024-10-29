import { Link } from "react-router-dom";


const Navber = () => {
    return (
        <div>
            <nav className="navber">
                <Link to="/home">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
                <Link to="/user">Users</Link>
                <Link to="/post">Post</Link>
            </nav>
        </div>
    );
};

export default Navber;