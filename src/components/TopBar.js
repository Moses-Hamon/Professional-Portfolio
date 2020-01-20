import React, { Component } from "react";
import { Typography } from "@rmwc/typography";
import {
  TopAppBar,
  TopAppBarRow,
  TopAppBarSection,
  TopAppBarTitle,
  TopAppBarFixedAdjust
} from "@rmwc/top-app-bar";


const navItems = [
  { name: "About Me", link: "" },
  { name: "Projects", link: "" },
  { name: "Experience", link: "" },
  { name: "Education", link: "" },
  { name: "Testimonials", link: "" },
  { name: "Community", link: "" },
  { name: "Contact", link: "" }
];

const TopBar = () => {
    return (
      <>
        <TopAppBar>
          <TopAppBarRow>
            <TopAppBarSection alignStart>
              <TopAppBarTitle>Moses Hamon</TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
              {navItems.map((item, index) => {
                const { name } = item;
                return (
                  <Typography
                    className="top-bar__menu-item"
                    key={index}
                    use="body1"
                  >
                    {name}
                  </Typography>
                );
              })}
            </TopAppBarSection>
          </TopAppBarRow>
        </TopAppBar>
        <TopAppBarFixedAdjust />
      </>
    );
}

export default TopBar;
