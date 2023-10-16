import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

import {SiFigma, SiYoutube} from "react-icons/si";

function ProjectCards(props) {
  const showGitHubButton = props.buttonOptions && props.buttonOptions.showGitHub;
  const showFigmaButton = props.buttonOptions && props.buttonOptions.showFigma;
  const showYoutubeButton = props.buttonOptions && props.buttonOptions.showYoutube;

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
        {showGitHubButton && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "Github"}
          </Button>
        )}
        {showFigmaButton && !props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiFigma /> &nbsp; {"Figma"}
          </Button>
        )}
        {showYoutubeButton && !props.isBlog && props.btnYT && !props.ghLink && (
          <Button
            variant="primary"
            href={props.btnYT}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <SiYoutube /> &nbsp; {"Youtube"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
