import React, { Component } from "react";

import Section from "./Section";
import Avatar from "./Avatar";

import "./AboutMe.css";

const aboutMeData = {
  img: "https://avatars0.githubusercontent.com/u/41456505?s=400&v=4",
  url: "https://www.linkedin.com/in/moses-hamon/",
  blurb: {
    Background:
      "I recently decided to transition to a career in Software Development, I have completed a Diploma Of Software Development. I've enjoyed developing my skills in the Web Development space, gaining professional experience within the startup arena and making friends with other like-minded developers.",
    Hobbies: "Developing, mountain biking, online gaming, fishing, camping.",
    Goals:
      "Work hard and expand on my software knowledge and skills as quickly as possible."
  }
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
      <div className="AboutMe">
        <Section heading="About Me">
          <Avatar img={img}>
            <AboutMeBlurb blurb={blurb} />
          </Avatar>
        </Section>
      </div>
    );
  }
}

export default AboutMe;
