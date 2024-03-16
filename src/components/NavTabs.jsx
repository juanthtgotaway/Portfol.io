import { Link, useLocation } from "react-router-dom";

function NavTabs() {
    const currentPage = useLocation().pathname;

    return(
        <ul>
            <li className="nav nav-tabs">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li className="nav nav-tabs">
                <Link
                    to="/AboutMe"
                    className={currentPage === '/AboutMe' ? 'nav-link active' : 'nav-link'}
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
    );
}

export default NavTabs;