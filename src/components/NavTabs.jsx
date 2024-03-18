import { Link, useLocation } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function NavTabs() {
    const currentPage = useLocation().pathname;
    console.log(currentPage);

    return (
        <>
            {['md'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" data-bs-theme="dark">
                    <Container fluid>
                        <Navbar.Brand href="/">
                            <h1>Juan Martinez</h1>
                        </Navbar.Brand>
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
    );
}

export default NavTabs;