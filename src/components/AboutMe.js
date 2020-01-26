import React, { Component } from "react";

import Section from "./Section";

const aboutMeData = {
};

const AboutMeBlurb = props => {
  const { blurb } = props;
  return (
    <table>
      {Object.keys(blurb).map(item => {
        return (
          <tr key={item}>
            <td>{item}</td>
            <td>{blurb[item]}</td>
          </tr>
        );
      })}
    </table>
  );
};

class AboutMe extends Component {
  render() {
    const { img, url, blurb } = aboutMeData;
    return (
      <Section heading="About Me">
      </Section>
    );
  }
}

export default AboutMe;
