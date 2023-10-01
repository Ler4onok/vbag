import ImageList from "@components/ImageList";
import Section from "@components/Section";
import React from "react";

const Bags = () => {
  return (
    <div className="flex item-center justify-center">
      <Section name="Available now">
        <ImageList />
      </Section>
    </div>
  );
};

export default Bags;
