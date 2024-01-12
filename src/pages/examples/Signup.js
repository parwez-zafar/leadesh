import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEnvelope, faUnlockAlt, faUser, faCode } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faBook, faExternalLinkAlt, faTimesCircle, faCheckCircle, faCalendarAlt, faCodeBranch, faShoppingCart, faFolder, faMapMarkedAlt, faPager, faFileCode, faDownload } from "@fortawesome/free-solid-svg-icons";
// import BS5Logo from "../assets/img/technologies/bootstrap-5-logo.svg";
// import BS5Logo from '../../assets/'
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup, Image, ListGroup, Tooltip, OverlayTrigger, } from '@themesberg/react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { Routes } from "../../routes";
import Select from "react-select";
import BgImage from "../../assets/img/illustrations/signin.svg";
import axios from "axios";
import firebase from "../../firebase";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { Modal } from '@themesberg/react-bootstrap';
import Axios from "../../axios";
import Cookies from "js-cookie";


// Update or import your signup logic if needed

const hardcodedCountryCodes = [

  { label: "India (+91)", value: "+91" },
];

const SignUp = () => {
  const [otp, setOtp] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    password: "",
    referralCode: "",
    countryCode: hardcodedCountryCodes[0],
  });


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const sendOTP = async (fullMobile) => {
    configureCaptcha();

    const phoneNumber = fullMobile;

    const appVerifier = window.recaptchaVerifier;

    const auth = getAuth();
    await signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log("Otp has been sent");
        // history.push(Routes.otp.path);
        openModal();

      }).catch((error) => {
        // Error; SMS not sent 
        console.log("SMS not sent", error);
        openModal();
      });

  }

  const verifyOtp = async (e) => {
    e.preventDefault()
    const code = otp;
    console.log(code);
    window.confirmationResult.confirm(code).then((result) => {
      const user = result.user;
      alert("otp varified")
      setIsModalOpen(false)
      createUser();
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      console.log("invalid OTP ", error);
      alert("Invalid OTP, Enter Again");

    });
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCountryCodeChange = (selectedOption) => {
    setFormData((prevData) => ({
      ...prevData,
      countryCode: selectedOption
    }));
  };




  const configureCaptcha = () => {

    const auth = getAuth();
    window.recaptchaVerifier = new RecaptchaVerifier(auth, 'sign-up-button', {
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        this.handleFormSubmit();
        console.log("Recaptca Verified");
      },
      defaultCountry: "IN"
    });
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password);
    if (!isPasswordValid) {
      alert('Password is not valid. Please ensure it meets the criteria.')
      console.error('Password is not valid. Please ensure it meets the criteria.');
      return;
    }
    const fullMobile = formData.countryCode.value + formData.mobile;
    await sendOTP(fullMobile);

  };

  const createUser = async () => {
    const fullMobile = formData.countryCode.value + formData.mobile;
    const requestData = {
      name: formData.name,
      password: formData.password,
      number: fullMobile
    };

    const requestDataString = JSON.stringify(requestData);
    localStorage.setItem("requestData", requestDataString);
    try {
      const response = await axios.post("/api/signup", requestData);
      const jwt = response.data.jwt;

      if (response.status === 201) {
        localStorage.setItem("jwt", jwt);
        Cookies.set('jwt', jwt)

        alert("signup success");
        history.push(Routes.pricePage.path);
        // console.log(response);
      } else {
        console.error('Signup failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  }


  return (
    <main>
      <Modal show={isModalOpen} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title className="mt-1">Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formOtp">
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" className="mt-2" onClick={verifyOtp}>
              Verify OTP
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <p className="text-center">
            <Card.Link as={Link} to={Routes.Presentation.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to Main page
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Form className="mt-4" onSubmit={handleFormSubmit}>
                  <div id="sign-up-button"></div>
                  <Form.Group id="name" className="mb-4">
                    <Form.Label>Your Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                      </InputGroup.Text>
                      <Form.Control
                        autoFocus
                        required
                        type="text"
                        placeholder="John Doe"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </Form.Group>
                  <div className="d-flex mb-4  ">
                    <Form.Group id="name" >
                      <Form.Label>Country code</Form.Label>
                      <div className="mx-1  py-1">
                        <InputGroup>
                          {/* <InputGroup.Text className="border border-primary">
                            <FontAwesomeIcon icon={faUser} />
                          </InputGroup.Text> */}
                          <Select
                            options={hardcodedCountryCodes}
                            value={formData.countryCode}
                            onChange={handleCountryCodeChange}
                            isSearchable={false}
                            className="country-code-select"
                          />
                        </InputGroup>
                      </div>
                    </Form.Group>
                    <Form.Group id="mobile">
                      <Form.Label>Your Mobile Number</Form.Label>
                      <InputGroup>
                        <InputGroup.Text>
                          <FontAwesomeIcon icon={faEnvelope} />
                        </InputGroup.Text>
                        <Form.Control
                          required
                          type="tel"
                          placeholder="1234567890"
                          name="mobile"
                          value={formData.mobile}
                          onChange={handleInputChange}
                          pattern="[0-9]{10}"
                          title="Please enter a valid 10-digit mobile number"
                        />
                      </InputGroup>
                    </Form.Group>
                  </div>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control
                        required
                        type="password"
                        placeholder="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                        title="The password should have 1 upper-case letter, 1 lower-case letter, 1 number, 1 special character and at least 8 characters."
                      />
                    </InputGroup>
                  </Form.Group>
                  {/* <Form.Group id="referralCode" className="mb-4">
                    <Form.Label>Referral Code (optional)</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCode} />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        placeholder="Enter referral code (optional)"
                        name="referralCode"
                        value={formData.referralCode}
                        onChange={handleInputChange}
                      />
                    </InputGroup>
                  </Form.Group> */}
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    {/* Add your additional signup form elements here */}
                  </div>
                  <Button variant="primary" type="submit" className="w-100">
                    Sign up
                  </Button>
                </Form>

                {/* <div className="mt-3 mb-4 text-center">
                  <span className="fw-normal">or sign up with</span>
                </div> */}
                {/* <div className="d-flex justify-content-center my-4">
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-facebook me-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-twitter me-2">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Button>
                  <Button variant="outline-light" className="btn-icon-only btn-pill text-dark">
                    <FontAwesomeIcon icon={faGithub} />
                  </Button>
                </div> */}
                <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routes.Signin.path} className="fw-bold">
                      {` Sign in`}
                    </Card.Link>
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main >
  );
};

export default SignUp;