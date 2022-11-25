import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ProjectCardNo from "./ProjectCardsNo";
import ProjectCardNo2 from "./ProjectCardsNo2";
import ProjectCardYT from "./ProjectCardsYT";
import Particle from "../Particle";

import uno from "../../Assets/Projects/1.png";
import dos from "../../Assets/Projects/2.png";
import tres from "../../Assets/Projects/3.png";
import cuatro from "../../Assets/Projects/4.png";
import cinco from "../../Assets/Projects/5.png";
import seis from "../../Assets/Projects/6.png";
import siete from "../../Assets/Projects/7.png";
import ocho from "../../Assets/Projects/8.jpg";
import nueve from "../../Assets/Projects/9.jpg";
import diez from "../../Assets/Projects/10.jpg";

import auno from "../../Assets/Projects/1a.png";
import ados from "../../Assets/Projects/2a.png";
import atres from "../../Assets/Projects/3a.png";
import acuatro from "../../Assets/Projects/4a.png";
import acinco from "../../Assets/Projects/5a.png";
import aseis from "../../Assets/Projects/6a.png";
import asiete from "../../Assets/Projects/7a.png";

import chatify from "../../Assets/Projects/11.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
       
          <Col md={4} className="project-card">
            <ProjectCardYT
              imgPath={chatify}
              isBlog={false}
              title="Login with Firebase"
              description="Create a Login with Firebase in Android Studio 2022 "
              ghLink="https://www.youtube.com/watch?v=15x1o8j6O1Y"
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={auno}
              isBlog={false}
              title="Crear prototipos y diseños de alta fidelidad en Figma"
              
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={ados}
              isBlog={false}
              title="Primeros pasos en el proceso de diseño de UX" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={atres}
              isBlog={false}
              title="React Basic"
            
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={acuatro}
              isBlog={false}
              title="Principles of UX/UI Design"
              
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={acinco}
              isBlog={false}
              title="Programming Fundamentals in Kotlin"
             
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={aseis}
              isBlog={false}
              title="React Native"
            
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={asiete}
              isBlog={false}
              title="Llevar a cabo investigaciones en UX"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={uno}
              isBlog={false}
              title="Registro de clientes Design"
              description="This is a design with a small database"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCardNo
              imgPath={dos}
              isBlog={false}
              title="Diseño Prueba Pagina"
              description="Small web design for web page for lodgings"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tres}
              isBlog={false}
              title="Curso Prueba Blog"
              description="Design to practice CSS and make small tests of animation and design."
              ghLink="https://github.com/MasterGabriel26/TiendaPrueba/tree/master"
              demoLink="https://mastergabriel26.github.io/TiendaPrueba/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinco}
              isBlog={false}
              title="Buscador de Autos Design"
              description="Design to search for cars from categories and by name"
              ghLink="https://github.com/MasterGabriel26/filtre.js"
              demoLink="https://mastergabriel26.github.io/filtre.js/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuatro}
              isBlog={false}
              title="Seguros Design"
              description="Web page for insurance quotes, small test design"
              ghLink="https://github.com/MasterGabriel26/seguro-prototype"
              demoLink="https://mastergabriel26.github.io/seguro-prototype/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seis}
              isBlog={false}
              title="Gastos Design"
              description="Web page for calculating weekly expenses test design"
              ghLink="https://github.com/MasterGabriel26/Gasto-semanal"
              demoLink="https://mastergabriel26.github.io/Gasto-semanal/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siete}
              isBlog={false}
              title="Admon de pasientes"
              description="web page to make an appointment for a veterinary clinic "
              ghLink="https://github.com/MasterGabriel26/date-citas"
              demoLink="https://mastergabriel26.github.io/date-citas/"
            />
          </Col>

          <Col md={4} className="project-card2">
            <ProjectCardNo2
              imgPath={ocho}
              isBlog={false}
              title="Prueba App Music"
              description="This is one of the designs I've done for UX/UI testing."
              
            />
          </Col>

          <Col md={4} className="project-card2">
            <ProjectCardNo2
              imgPath={nueve}
              isBlog={false}
              title="Calculo de IMC with API"
              description="Use of api for BMI calculation"
            
            />
          </Col>

          <Col md={4} className="project-card2">
            <ProjectCardNo2
              imgPath={diez}
              isBlog={false}
              title="Goutln"
              description="This is my application where I will be uploading videos, products and images for my personal brand."
             
            />
          </Col>




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
