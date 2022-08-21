import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand bg-white d-flex justify-content-between">
            <Link className="navbar-brand fs-3 fw-bold" to="/">The Dojo Blog</Link>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item ms-3">
                        <Link className="nav-link" to="/create" style={{
                            color:"#fff",
                            backgroundColor:"#f1356d",
                            borderRadius:"8px"
                        }}>New Blog</Link>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;