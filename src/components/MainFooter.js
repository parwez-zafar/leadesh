import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
import { faBootstrap, faGithub, faJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Code from "../components/CodeEditor";
import GitHubButton from 'react-github-btn';

import { Routes } from "../routes";
import ThemesbergLogoIcon from "../assets/img/themesberg.svg";
import ThemesbergLogo from "../assets/img/themesberg-logo.svg";
import MockupPresentation from "../assets/img/mockup-presentation.png";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import MapboxImg from "../assets/img/mockup-map-presentation.png";
import CalendarImg from "../assets/img/mockup-calendar-presentation.png";
import ReactMockupImg from "../assets/img/react-mockup.png";
import BS5IllustrationsImg from "../assets/img/illustrations/bs5-illustrations.svg";
import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
import ReactLogo from "../assets/img/technologies/react-logo.svg";
import logo from '../assets/img/logo/logo-website.png'
import logoIcon from '../assets/img/favicon/favicon.png'

const MainFooter = () => {
    return (
        <footer className="footer py-6 bg-dark text-white">
            <Container>
                <Row>
                    <Col md={4}>
                        <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 mb-3 d-flex align-items-center">
                            <Image src={logo} />
                            {/* <span className="ms-2 brand-text">Leadesh</span> */}
                        </Navbar.Brand>
                        <p>Leadesh empowers you to select specific keywords that matter to you, and we'll notify you when these words appear in your WhatsApp conversations</p>
                    </Col>
                    <Col xs={6} md={2} className="mb-5 mb-lg-0">
                        <span className="h5">Links</span>
                        <ul className="links-vertical mt-2">
                            <li><Card.Link target="_blank" href="https://themesberg.com/blog">About</Card.Link></li>
                            <li><Card.Link target="_blank" href="https://themesberg.com/products">Features</Card.Link></li>
                            <li><Card.Link target="_blank" href="https://themesberg.com/about">Pricing</Card.Link></li>
                            <li><Card.Link target="_blank" href="https://themesberg.com/contact">Download App</Card.Link></li>
                        </ul>
                    </Col>
                    <Col xs={6} md={2} className="mb-5 mb-lg-0">
                        <span className="h5">Social  Media </span>
                        <ul className="links-vertical mt-2">
                            <li>
                                <Card.Link href='https://www.linkedin.com/feed/' target="_blank">Linkedin</Card.Link>
                            </li>
                            <li><Card.Link href="https://www.facebook.com/" target="_blank">Facebook</Card.Link></li>
                            <li><Card.Link target="_blank" href="https://www.instagram.com/">Instagram</Card.Link></li>
                            <li><Card.Link target="_blank" href="https://twitter.com/home">Twitter</Card.Link></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4} className="mb-5 mb-lg-0">
                        <span className="h5 mb-3 d-block">Legal</span>
                        <ul className="links-vertical mt-2">
                            <li>
                                <Card.Link as={Link} to={Routes.privacy.path}  >Privacy Policy</Card.Link>
                            </li>
                            <li><Card.Link as={Link} to={Routes.term.path} >Terms and Conditions</Card.Link></li>
                        </ul>
                    </Col>
                </Row>
                <hr className="bg-gray my-5" />
                <Row>
                    <Col className="mb-md-2">

                        <div className="d-flex text-center justify-content-center align-items-center" role="contentinfo">
                            <p className="font-weight-normal font-small mb-0">© 2023 - 2024 Neonflake Enterprises OPC Pvt Ltd. All Rights Reserved.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default MainFooter