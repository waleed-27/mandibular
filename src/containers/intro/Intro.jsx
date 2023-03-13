import React from "react";
import "./intro.css";
import intro from "../../assets/intro.png";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Intro = () => {
  return (
    <Container
      fluid
      className="mt-5 d-flex flex-row align-items-center justify-content-center"
    >
      <Row className="my-5 px-5 d-flex flex-row align-items-start justify-content-center">
        <Col md={5} className="align-items-stretch me-5 d-flex flex-column" >
          <h2 className="mb-5" style={{ color: "#9DD84E" }}>
            Revolutionize Your Dental Practice with AI-Powered Mandibular Canal
            Segmentation
          </h2>

          <p className="mb-4 mt-3 font-20 text-white">
            <span style={{ color: "#9DD84E" }}>Accurate</span> segmentation of
            the mandibular canal is crucial for various{" "}
            <span style={{ color: "#9DD84E" }}>craniofacial</span> procedures.
          </p>
          <p className="mb-4 font-20 text-white">
            However, the <span style={{ color: "#9DD84E" }}>challenges</span>{" "}
            associated with mandibular canal segmentation from CBCT images make
            the process <span style={{ color: "#9DD84E" }}>slow</span> and{" "}
            <span style={{ color: "#9DD84E" }}>inefficient</span>.
          </p>

          <p className="mb-4 font-20 text-white">
            With our <span style={{ color: "#9DD84E" }}>AI-powered </span>
            mandibular canal segmentation tool,{" "}
            <span style={{ color: "#9DD84E" }}>
              dental professionals
            </span> can <span style={{ color: "#9DD84E" }}>streamline </span>
            their workflow, <span style={{ color: "#9DD84E" }}>
              improve
            </span>{" "}
            patient outcomes, and{" "}
            <span style={{ color: "#9DD84E" }}>save </span>
            time.
          </p>

          <div
            style={{
              backgroundColor: "#9DD84E",
              height: "3px",
              width: "100%",
            }}
          />
        </Col>
        <Col md={{ span: 5, offset: 0 }}>
          <div className="d-flex text-md-end mt-3 mt-md-0 me-5">
            <img src={intro} alt="" className="img-fluid"/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Intro;
