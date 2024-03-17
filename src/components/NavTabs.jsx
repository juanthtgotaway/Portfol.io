import { Link, useLocation } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavTabs() {
    const currentPage = useLocation().pathname;
    console.log(currentPage);

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
                    <Container fluid>
                        <Navbar.Brand href="#">Juan Martinez</Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                    Juan Martinez
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Link
                                        to="/"
                                        className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                                    >
                                        About
                                    </Link>
                                   
                                    <Link
                                        to="/Projects"
                                        className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
                                    >
                                        Projects
                                    </Link>

                                    <Link
                                        to="/Contact"
                                        className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
                                    >
                                        Contact
                                    </Link>

                                    <Link
                                        to="/Resume"
                                        className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
                                    >
                                        Resume
                                    </Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>

        // <div>
        //     <nav className="navbar navbar-expand-lg bg-body-tertiary">
        //         <div className="container-fluid">
        //             <span className="navbar-brand">
        //                 <h1>Juan Martinez</h1>
        //             </span>
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //         </div>
        //         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        //             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        //                 <li className="nav-item">
        //                     <Link
        //                         to="/"
        //                         className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        //                     >
        //                         About
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link
        //                         to="/Projects"
        //                         className={currentPage === '/Projects' ? 'nav-link active' : 'nav-link'}
        //                     >
        //                         Projects
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link
        //                         to="/Contact"
        //                         className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        //                     >
        //                         Contact
        //                     </Link>
        //                 </li>
        //                 <li className="nav-item">
        //                     <Link
        //                         to="/Resume"
        //                         className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        //                     >
        //                         Resume
        //                     </Link>
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </div>
    );
}

export default NavTabs;