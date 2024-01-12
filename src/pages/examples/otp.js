import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faMobile, faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";

const OTPValidationPage = () => {
  const history = useHistory();
  const [otp, setOtp] = useState("");
  const [isOtpValid, setIsOtpValid] = useState(false);

  const handleOtpChange = (e) => {
    const { value } = e.target;
    setOtp(value);
  };

  const handleValidateOtp = (e) => {
    e.preventDefault()
    const code = otp();
    console.log(code);
    window.confirmationResult.confirm(code).then((result) => {
      // User signed in successfully.
      const user = result.user;
      console.log(JSON.stringify(user));
      alert("otp varified")
      // ...
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log("invalid OTP ", error);
    });


    // if (isValid) {
    //   // Redirect to the dashboard if OTP is valid
    //   history.push(Routes.DashboardOverview.path);
    // }
  };

  return (
    <main>
      <section className="bg-soft d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center">
            <p className="text-center">
              <Card.Link as={Link} to={Routes.Signin.path} className="text-gray-700">
                <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to sign in
              </Card.Link>
            </p>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <h3 className="mb-4">OTP Validation</h3>
                <Form>
                  <Form.Group id="otp" className="mb-4">
                    <Form.Label>Enter OTP</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faMobile} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="text"
                        placeholder="Enter OTP"
                        value={otp}
                        onChange={handleOtpChange}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="button"
                    className="w-100"
                    onClick={handleValidateOtp}
                  >
                    Validate OTP
                  </Button>

                  {isOtpValid && (
                    <div className="text-center mt-3 text-success">
                      <FontAwesomeIcon icon={faCheckCircle} className="me-2" />
                      OTP is valid! Redirecting...
                    </div>
                  )}

                  {!isOtpValid && otp !== "" && (
                    <div className="text-center mt-3 text-danger">
                      <FontAwesomeIcon icon={faTimesCircle} className="me-2" />
                      Invalid OTP. Please try again.
                    </div>
                  )}
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default OTPValidationPage;
