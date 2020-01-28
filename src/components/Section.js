import React, { Component } from "react";
import { Typography } from "@rmwc/typography";

const Section = ({children, heading}) => {
    return (
      <div className="Section">
        <div className="container">
          <Typography className="section__heading" use="headline3">
            {heading}
          </Typography>
          {children}
        </div>
      </div>
    );
}

export default Section;
