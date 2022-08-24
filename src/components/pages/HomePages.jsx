import React from "react";
import Branding from "../home/Branding";
import Home from "../home/homes/Home";
import Services from "../services/Services";
import About from "../home/about/About";
import Wrapper from "../home/Wrapper";
import Skill from "../home/Skill";
import WrapperOne from "../home/WrapperOne";
import Work from "../work/Work";
import Blog from "../home/blog/Blog";

const HomePages = () => {
  return (
    <>
      <Home />
      <Branding />
      <About />
      <Services />
      <Wrapper />
      <Skill />
      <WrapperOne />
      <Work />
      <Blog />
    </>
  );
};

export default HomePages;
