import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const currentPage = useLocation().pathname;

    return(
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1 className="navbar-brand">JuanThtGotAway</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                to="/"
                                className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                            >
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Projects"
                                className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Contact"
                                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                            >
                                Contact
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/Resume"
                                className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                            >
                                Resume
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavTabs;