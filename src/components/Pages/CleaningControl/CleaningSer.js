import React from "react";
import FooterThree from "../../common/Footer/FooterThree";
import Menu from "../../common/Menu/Menu";
import SingleTeamBanner from "./SingleTeamBanner";
import TeamDetailsAbout from "./TeamDetailsAbout";
import TeamDetailsHero from "./TeamDetailsHero";
import Contact from "../../common/Contact/Contact";

const CleaningSer = () => {
  return (
    <>
      <Menu header_style_1={true} />
      <SingleTeamBanner />
      
      <TeamDetailsAbout />
      <Contact />
      <FooterThree />
    </>
  );
};

export default CleaningSer;
