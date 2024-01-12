import React from 'react'
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

const TermsAndCondition = () => {
    return (
        <>
            <MainNavbar />

            <section className="section section-lg bg-light">
                <Container>
                    <Row className="justify-content-center ">
                        <Col xs={12} className="text-center">
                            <h2 className="px-lg-5">Terms and Conditions</h2>
                            <p className="lead px-lg-8">Last Updated: December 13 2023</p>
                        </Col>
                    </Row>

                    <Row>
                        <b>Acceptance of Terms</b>
                        <p>By accessing or using the Leadesh mobile application (the "Service"), you agree to comply with and be bound by these Terms and Conditions. If you disagree with any part of the terms, you may not access the Service.</p>


                        <b>Use of the Service</b>
                        <p>You must be at least 18 years old to use the Service.</p>
                        <p>You are responsible for maintaining the confidentiality of your account information.</p>

                        <b>User Content</b>
                        <p>By using the Service, you grant Neonflake Enterprises (OPC) Pvt Ltd a non-exclusive license to use, reproduce, adapt, publish, translate, and distribute your user content.</p>

                        <b>Prohibited Activities</b>
                        <p>You agree not to engage in any of the following activities:</p>
                        <div className='ml-5'>
                            <ul>
                                <li>Violating laws or regulations</li>
                                <li>Unauthorized access to other users' accounts.</li>
                                <li>Posting content that is harmful, threatening, or violates the rights of others.</li>
                            </ul>
                        </div>




                        <b>Termination</b>
                        <p>Neonflake Enterprises (OPC) Pvt Ltd reserves the right to terminate or suspend your account at any time without prior notice for any reason.</p>

                        <b> Changes to Terms</b>
                        <p>Neonflake Enterprises (OPC) Pvt Ltd reserves the right to modify or replace these Terms and Conditions at any time. Your continued use of the Service after any changes constitute acceptance of the new Terms.</p>

                        <b> Limitation of Liability</b>
                        <p>  Neonflake Enterprises (OPC) Pvt Ltd and its affiliates will not be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use the Service.
                        </p>

                        <b> Governing Law</b>
                        <p> These Terms and Conditions are governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.
                        </p>

                        <b> Contact Us</b>
                        <p>  If you have any questions about these Terms and Conditions, please contact Neonflake Enterprises (OPC) Pvt Ltd at contact@leadesh.com.
                        </p>



                    </Row>
                </Container>
            </section>

            <MainFooter />
        </>
    )
}

export default TermsAndCondition