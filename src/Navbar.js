const Navbar = () => {
    return (
        <nav className="navbar navbar-expand bg-white d-flex justify-content-between">
            <a className="navbar-brand fs-3 fw-bold" href="#">The Dojo Blog</a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item ms-3">
                        <a className="nav-link" href="#" style={{
                            color:"#fff",
                            backgroundColor:"#f1356d",
                            borderRadius:"8px"
                        }}>New Blog</a>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;