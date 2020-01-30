import React from "react";
import { Typography } from "@rmwc/typography";

import "./Section.css"

const Section = ({children, heading}) => {
    return (
      <div className="Section">
          <Typography className="Section__heading" use="headline3">
            {heading}
          </Typography>
          {children}
      </div>
    );
}

export default Section;
