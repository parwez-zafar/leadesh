import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Image, Button, Container, Navbar, Nav } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { Routes } from "../routes";
import logo from '../assets/img/logo/logo-website.png'
import logoIcon from '../assets/img/favicon/favicon.png'
const MainNavbar = () => {
    return (
        <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
            <Container className="position-relative justify-content-between px-3">
                <Navbar.Brand as={HashLink} to="/" className="me-lg-3 d-flex align-items-center">
                    <Image src={logoIcon} />
                    <span className="ms-2 brand-text d-none d-md-inline">
                        <img src={logo} alt="" />
                    </span>
                </Navbar.Brand>

                <div className="d-flex align-items-center">
                    <Navbar.Collapse id="navbar-default-primary">
                        <Nav className="navbar-nav-hover align-items-lg-center">
                            <Nav.Link as={Link} to={Routes.DashboardOverview.path}>Home</Nav.Link>
                            <Nav.Link as={HashLink} to="#key-features">Features</Nav.Link>
                            <Nav.Link as={HashLink} to="#about">About</Nav.Link>
                            <Nav.Link as={Link} to={Routes.faq.path} className="d-sm-none d-xl-inline">FAQs</Nav.Link>

                            <Nav.Link as={HashLink} to="#download">Pricing</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                    <Button as={HashLink} to="#download" variant="outline-white" className="ms-3"><FontAwesomeIcon icon={faDownload} className="me-1" /> Download</Button>
                </div>
            </Container>
        </Navbar>
    )
}

export default MainNavbar