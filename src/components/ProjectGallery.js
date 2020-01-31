import React from "react";
import { Grid, GridCell } from "@rmwc/grid";

import "@material/layout-grid/dist/mdc.layout-grid.css";

import Section from "./Section";
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
    name: "",
    url: "",
    img: "",
    area: "",
    description: "",
    languages: "",
    technologies: "",
    devTools: ""
  }
];

const ProjectGallery = () => {
  return (
    <Section heading="Projects">
      <Grid>
          
      </Grid>
    </Section>
  );
};

export default ProjectGallery;
