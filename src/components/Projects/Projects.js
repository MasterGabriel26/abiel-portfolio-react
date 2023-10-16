import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

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
import FigmaImage1 from "../../Assets/Frame 1.png";
import FigmaImage2 from "../../Assets/Frame 1aa.png";
import FigmaImage3 from "../../Assets/Frame 1ade.png";
import FigmaImage4 from "../../Assets/Frame 3.png";
import FigmaImage5 from "../../Assets/Frame 27.png";
import FigmaImage6 from "../../Assets/Frame 34568.png";
import FigmaImage7 from "../../Assets/asd.png";
import FigmaImage8 from "../../Assets/carne.png";
import FigmaImage9 from "../../Assets/Captura de pantalla 2023-10-16 143202.png";

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
            <ProjectCard
              imgPath={FigmaImage9}
              isBlog={false}
              title="SafeRoom"
              description="Personal project using Angular, Adafruit, Laravel and sensors."
              ghLink="https://github.com/MasterGabriel26/PracticaAngular"
              buttonOptions={{
                showGitHub: true,  
                showFigma: false,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaImage6}
              isBlog={false}
              title="JASSO"
              description="Design and apps for android and IOS for the company JASSO event organizer. "
              demoLink="https://www.figma.com/file/N7MetJQaO1fgHTnjp43CzF/Untitled?type=design&t=smykl9at3KbVnzzE-6"
              buttonOptions={{
                showGitHub: false,  
                showFigma: true,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaImage5}
              isBlog={false}
              title="Intergas"
              description="Software and design for intergas, I was in charge of the front end."
              demoLink="https://www.figma.com/file/p8sj9rO9DLAW0zRUvXT0q8/Untitled?type=design&t=o7sAUF8uztxNdStG-6"
              buttonOptions={{
                showGitHub: false,  
                showFigma: true,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaImage4}
              isBlog={false}
              title="XENT"
              description="Software and Design for the company xent collaboration with itPartner"
              demoLink="https://www.figma.com/file/SfUl8rIJLMFVud3BbdIkLj/XENT?type=design&t=o7sAUF8uztxNdStG-6"
              buttonOptions={{
                showGitHub: false,  
                showFigma: true,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaImage7}
              isBlog={false}
              title="Hamet Industriales"
              description="Website redesign for the company Hamet industriales"
              demoLink="https://www.figma.com/file/ZTTM24xuLe09Dxwgt1qNPs/Redise%C3%B1o-pagina-web?type=design&t=o7sAUF8uztxNdStG-6"
              buttonOptions={{
                showGitHub: false,  
                showFigma: true,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaImage2}
              isBlog={false}
              title="La Casa de Toño (LCT)"
              description="App and WebSite development for the administration La casa de Toño."
              demoLink="https://www.figma.com/file/K2AUfgVcKYIua40o34NeZO/LCT-Mobile?type=design&t=o7sAUF8uztxNdStG-6"
              buttonOptions={{
                showGitHub: false,  
                showFigma: true,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaImage1}
              isBlog={false}
              title="DHARMA Solutions"
              description="App developed in Flutter for a psychologist for his administration."
              demoLink="https://www.figma.com/file/0qn2Auw2JxW09UGX7gIxnM/Psicolog%C3%ADa?type=design&t=o7sAUF8uztxNdStG-6"
              buttonOptions={{
                showGitHub: false,  
                showFigma: true,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaImage8}
              isBlog={false}
              title="Carniceria Design"
              description="Design of an app for a butcher's shop as a prototype for a co-worker"
              demoLink="https://www.figma.com/file/rb5mAYETH8n47ODu7SS9Ua/Carniceria?type=design&t=smykl9at3KbVnzzE-6"
              buttonOptions={{
                showGitHub: true,  
                showFigma: true,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FigmaImage3}
              isBlog={false}
              title="Anbiel Food"
              description="App just to see how was the app I developed with firebase as an ecommerce."
              ghLink="https://github.com/MasterGabriel26/AnbielFood"
              demoLink="https://www.figma.com/file/xKubDWIZ01pj5OZ7MhZg3e/Anbiel-Store-app?type=design&t=smykl9at3KbVnzzE-6/"
              // btnYT = "https://blogs.soumya-jit.tech/"
              buttonOptions={{
                showGitHub: true,  
                showFigma: true,    
                showYoutube: false,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Login with Firebase"
              description="Create a Login with Firebase in Android Studio 2022 "
              btnYT="https://www.youtube.com/channel/UCGkhHxNl75EFEizA0zAVifw"
              buttonOptions={{
                showGitHub: false,  
                showFigma: false,    
                showYoutube: true,  
              }}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={auno}
              isBlog={false}
              title="Crear prototipos y diseños de alta fidelidad en Figma"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ados}
              isBlog={false}
              title="Primeros pasos en el proceso de diseño de UX" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={atres}
              isBlog={false}
              title="React Basic"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acuatro}
              isBlog={false}
              title="Principles of UX/UI Design"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={acinco}
              isBlog={false}
              title="Programming Fundamentals in Kotlin"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aseis}
              isBlog={false}
              title="React Native"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={asiete}
              isBlog={false}
              title="Llevar a cabo investigaciones en UX"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uno}
              isBlog={false}
              title="Registro de clientes Design"
              description="This is a design with a small database"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
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
              // demoLink="https://mastergabriel26.github.io/TiendaPrueba/"
              buttonOptions={{
                showGitHub: true,  
                showFigma: false,    
                showYoutube: false,  
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cinco}
              isBlog={false}
              title="Buscador de Autos Design"
              description="Design to search for cars from categories and by name"
              ghLink="https://github.com/MasterGabriel26/filtre.js"
              // demoLink="https://mastergabriel26.github.io/filtre.js/"     
              buttonOptions={{
                showGitHub: true,  
                showFigma: false,    
                showYoutube: false,  
              }}         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cuatro}
              isBlog={false}
              title="Seguros Design"
              description="Web page for insurance quotes, small test design"
              ghLink="https://github.com/MasterGabriel26/seguro-prototype"
              // demoLink="https://mastergabriel26.github.io/seguro-prototype/"
              buttonOptions={{
                showGitHub: true,  
                showFigma: false,    
                showYoutube: false,  
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={seis}
              isBlog={false}
              title="Gastos Design"
              description="Web page for calculating weekly expenses test design"
              ghLink="https://github.com/MasterGabriel26/Gasto-semanal"
              // demoLink="https://mastergabriel26.github.io/Gasto-semanal/" 
              buttonOptions={{
                showGitHub: true,  
                showFigma: false,    
                showYoutube: false,  
              }}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={siete}
              isBlog={false}
              title="Admon de pasientes"
              description="web page to make an appointment for a veterinary clinic "
              ghLink="https://github.com/MasterGabriel26/date-citas"
              // demoLink="https://mastergabriel26.github.io/date-citas/"
              buttonOptions={{
                showGitHub: true,  
                showFigma: false,    
                showYoutube: false,  
              }}
            />
          </Col>

          <Col md={4} className="project-card2">
            <ProjectCard
              imgPath={ocho}
              isBlog={false}
              title="Prueba App Music"
              description="This is one of the designs I've done for UX/UI testing."
              
            />
          </Col>

          <Col md={4} className="project-card2">
            <ProjectCard
              imgPath={nueve}
              isBlog={false}
              title="Calculo de IMC with API"
              description="Use of api for BMI calculation"
            
            />
          </Col>

          <Col md={4} className="project-card2">
            <ProjectCard
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
