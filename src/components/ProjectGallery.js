import React from "react";
import { Grid, GridCell } from "@rmwc/grid";
import {
  Card,
  CardActions,
  CardPrimaryAction,
  CardMedia,
  CardActionButtons,
  CardActionButton,
  CardActionIcons,
  CardActionIcon
} from "@rmwc/card";
import '@material/card/dist/mdc.card.css';
import '@material/button/dist/mdc.button.css';
import '@material/icon-button/dist/mdc.icon-button.css';

import "@material/layout-grid/dist/mdc.layout-grid.css";

import Section from "./Section";
import { Typography } from "@rmwc/typography";
// Name
//Url
//Img
//Area
//Description
//Languages
//Technologies
//Dev Tools
const projectsData = [
  {
    name: "Project 1",
    url: "www.google.com.au",
    img: "https://homepages.cae.wisc.edu/~ece533/images/mountain.png",
    area: "Front End",
    description: "This is the first application that I created for Tafe.",
    languages: ["Java"],
    technologies: ["Java Runtime Environment"],
    devTools: "Netbeans"
  },
  {
    name: "Project 2",
    url: "www.google.com.au",
    img: "https://homepages.cae.wisc.edu/~ece533/images/serrano.png",
    area: "Client Side",
    description:
      "Another application created During tafe. Client to Client communication",
    languages: ["JavaScript"],
    technologies: ["AZure"],
    devTools: ["vscode"]
  }
];

const ProjectGallery = () => {
  return (
    <Section heading="Projects">
      <Grid>
        {projectsData.map((project, index) => {
          const { img, description } = project;
          return (
            <GridCell key={index} desktop={6} tablet={8} phone={4}>
              <Card>
                <CardPrimaryAction>
                  <CardMedia
                    style={{
                      backgroundImage: `url("https://material-components-web.appspot.com/images/16-9.jpg")`
                    }}
                  />
                </CardPrimaryAction>
                <Typography use="body1" >
                  {description}
                </Typography>
              </Card>
            </GridCell>
          );
        })}
      </Grid>
    </Section>
  );
};

export default ProjectGallery;
