import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const currentPage = useLocation().pathname;

    return(
        <div className="header">
            <div>
                <h1>JuanThtGotAway</h1>
            </div>
            <div className="menu">
                <ul>
                    <li className="nav nav-tabs">
                        <Link
                            to="/"
                            className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                        >
                            About
                        </Link>
                    </li>
                    <li className="nav nav-tabs">
                        <Link
                            to="/Projects"
                            className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
                        >
                            Projects
                        </Link>
                    </li>
                    <li className="nav nav-tabs">
                        <Link
                            to="/Contact"
                            className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                        >
                            Contact
                        </Link>
                    </li>
                    <li className="nav nav-tabs">
                        <Link
                            to="/Resume"
                            className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                        >
                            Resume
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavTabs;