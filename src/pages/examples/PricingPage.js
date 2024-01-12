import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Card, Image, Button, Container, ListGroup, Tooltip, OverlayTrigger, Form, Navbar, Nav, Badge } from '@themesberg/react-bootstrap';
import { Routes } from "../../routes";
import axios from 'axios'
import Cookies from "js-cookie";
import Axios from "../../axios";

const PricingPage = ({ history }) => {

    let jwt_token;

    const handlesubsType = async (subsType) => {
        console.log(subsType)
        try {
            const response = await axios.post('/api/package/add',
                { package: subsType },
            )
            if (response.status === 200) {
                alert("subscription selected");
                history.push(Routes.DashboardOverview.path);
                // console.log(response);
            } else {
                console.error('subscription failed:', response.statusText);
            }
        }
        catch (error) {
            console.error('Error during subscription:', error);
        }

    }


    useEffect(() => {
        jwt_token = localStorage.getItem('jwt');

        Cookies.set('jwt', jwt_token)
        if (!jwt_token) {
            history.push(Routes.Signin.path);
        }
    }, [])

    return (
        <section className="section section-lg bg-white" id="download">
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <h2 className="fw-light mb-3 text-center">Choose your preferred plan for Leadesh Team </h2>
                        <p className="lead mb-4 me-lg-6">Choose the package that fits your needs. No hidden fees, no credit card required during the trial.</p>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="github-big-icon">
                            <FontAwesomeIcon icon={faGithub} />
                        </div>
                    </Col>
                </Row>
                <Row className="mt-6">
                    <Col xs={12} md={6} lg={4} className="mb-5 mb-lg-0">
                        <Card border="light" className="p-4">
                            <Card.Header className="bg-white border-0 pb-0">
                                <span className="d-block">
                                    <h2 className="text-primary fw-bold align-top">Basic</h2>
                                </span>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup className="list-group-flush price-list">

                                    <ListGroup.Item className="bg-white border-0 ps-0">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /><strong>10</strong> Keywords
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-white border-0 ps-0">
                                        <h3 className="d-inline font-weight-bold">₹100</h3> / <b>month</b> - billed monthly
                                    </ListGroup.Item>

                                </ListGroup>
                            </Card.Body>
                            <Button variant="primary" className="w-100 m-0 mt-3 mb-3" onClick={() => handlesubsType("Basic")}> Start free trial</Button>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={4} className="mb-5 mb-lg-0">
                        <Card border="light" className="p-4 py-5 mt-lg-n5">
                            <Card.Header className="bg-white border-0 pb-0">
                                <span className="d-block">
                                    <h2 className="text-primary fw-bold align-top">Pro </h2>
                                </span>
                            </Card.Header>
                            <Card.Body>
                                <ListGroup className="list-group-flush price-list">

                                    <ListGroup.Item className="bg-white border-0 ps-0">
                                        <FontAwesomeIcon icon={faCheckCircle} className="text-success me-2" /><strong>25</strong> Keywords
                                    </ListGroup.Item>
                                    <ListGroup.Item className="bg-white border-0 ps-0">
                                        <h3 className="d-inline font-weight-bold">₹200</h3> / <b>month</b> - billed monthly
                                    </ListGroup.Item>

                                </ListGroup>
                            </Card.Body>
                            <Button target="_blank" variant="secondary" className="w-100 m-0 mt-3" onClick={() => handlesubsType("Pro")}>Start free trial </Button>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default PricingPage