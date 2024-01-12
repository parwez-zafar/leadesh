import React from 'react';

import { Col, Row, Container, } from '@themesberg/react-bootstrap';

import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

const Faq = () => {
    return (
        <>
            <MainNavbar />

            <section className="section section-lg bg-light">
                <Container>
                    <Row className="justify-content-center">
                        <Col xs={12} className="text-center">
                            <h2 className="px-lg-5">Frequently Asked Questions (FAQs)</h2>
                            {/* <p className="lead px-lg-8">You get all React.js components fully customized. Besides, you receive numerous plugins out of the box and ready to use.</p> */}
                        </Col>
                    </Row>

                    <Row>
                        <b>Q: What is Leadesh?</b>
                        <p>A: Leadesh is a mobile app designed for WhatsApp users. It helps you stay informed by alerting you when specific keywords appear in your WhatsApp conversations.</p>


                        <b>Q: What is Leadesh?</b>
                        <p>A: It's simple. Choose words you care about, and Leadesh will notify you when these words come up in your WhatsApp chats.</p>

                        <b>Q: Is Leadesh available for download on both iOS and Android?</b>
                        <p>  A: Leadesh is available for download on the Google Play Store for Android devices only.</p>

                        <b>  Q: How much does Leadesh cost?</b>
                        <p> A: We offer two packages - Rs 100 for 10 keywords and Rs 200 for 25 keywords. The first 7 days are free, and you don't need to provide any credit card details during the trial.</p>


                        <b>Q: Can I cancel my subscription at any time?</b>
                        <p>A: Yes, you can cancel your subscription at any time. Leadesh believes in giving you the flexibility you need.</p>

                        <b> Q: Is my data secure with Leadesh?</b>
                        <p>A: Absolutely. We take user privacy seriously. Your data is securely handled, and we don't compromise on your privacy.</p>

                        <b> Q: How do I get started with Leadesh?</b>
                        <p>  A: Simply download the app, sign up, and choose your keywords. Leadesh will start alerting you when those keywords appear in your WhatsApp conversations. It's that easy!</p>



                    </Row>
                </Container>
            </section>

            <MainFooter />
        </>
    )
}

export default Faq