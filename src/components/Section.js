import React from "react";
import { Typography } from "@rmwc/typography";

const Section = ({children, heading}) => {
    return (
      <div className="Section">
          <Typography className="section__heading" use="headline3">
            {heading}
          </Typography>
          {children}
      </div>
    );
}

export default Section;
