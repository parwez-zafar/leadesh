import React from 'react'
import { Col, Row, Container } from '@themesberg/react-bootstrap';
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

const PrivacyPolicy = () => {
    return (
        <>
            <MainNavbar />

            <section className="section section-lg bg-light">
                <Container>
                    <Row className="justify-content-center ">
                        <Col xs={12} className="text-center">
                            <h2 className="px-lg-5">Privacy Policy</h2>
                            <p className="lead px-lg-8">Last Updated: December 13 2023</p>
                        </Col>
                    </Row>

                    <Row>
                        <b>Introduction</b>
                        <p>Neonflake Enterprises (OPC) Pvt Ltd ("us", "we", or "our") operates the Leadesh mobile application (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>


                        <b>Information Collection and Use</b>
                        <p>We collect several different types of information for various purposes to provide and improve our Service.</p>

                        <b>Types of Data Collected</b>
                        <div className='ml-5'>
                            <b> Personal Data:</b>
                            <p>  While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you.</p>
                            <b> Usage Data:</b>
                            <p>  We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your device's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</p>
                        </div>

                        <b>Use of Data?</b>
                        <p> We use the collected data for various purposes, including but not limited to:</p>
                        <ul className='ml-5'>
                            <li>To provide and maintain our Service.</li>
                            <li>To notify you about changes to our Service.</li>
                            <li>To provide customer support.</li>
                            <li>To gather analysis or valuable information so that we can improve our Service.</li>
                        </ul>


                        <b>Security</b>
                        <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

                        <b> Changes to This Privacy Policy</b>
                        <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                        <b> Contact Us</b>
                        <p>  If you have any questions about this Privacy Policy, please contact Neonflake Enterprises (OPC) Pvt Ltd at contact@leadesh.com.
                            By using the Service, you agree to the collection and use of information in accordance with this policy.
                        </p>



                    </Row>
                </Container>
            </section>

            <MainFooter />
        </>
    )
}

export default PrivacyPolicy