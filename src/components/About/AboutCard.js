import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I'm
            <span className="purple"> Gabriel Solis </span>
            and I'm from <span className="purple"> Torreon Coahuila, Mexico.</span>
            <br />I'm a student of Software Development. I am currently studying
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImArrowRight2 /> Playing Games
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Make music
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Programming
            </li>
            <li className="about-activity">
              <ImArrowRight2/> reading
            </li>
            <li className="about-activity">
              <ImArrowRight2 /> Travelling
            </li>
          </ul>

          <p style={{ color: "#ff0606" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Gabriel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
