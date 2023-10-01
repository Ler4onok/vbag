import ImageBanner from "@components/ImageBanner";
import Section from "@components/Section";
import React from "react";

const About = () => {
  return (
    <>
    <ImageBanner name="about" />
    <Section name="About Vbag">
      <p className="px-20 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse rhoncus lobortis turpis, at pharetra nisi imperdiet nec. Etiam tristique dignissim scelerisque. Pellentesque semper varius congue. Duis in imperdiet justo, sit amet mattis odio. Nulla dolor libero, vestibulum quis sapien eget, volutpat blandit justo. </p>
    </Section>
    </>
  )
};

export default About;
