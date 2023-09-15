import ImageList from "@components/ImageList";
import Section from "@components/Section";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="image w-full h-4/5 bg-cover"></div>
      <div className="w-full">
        <Section>
          <h3 className="text-2xl">Available now</h3>
          <ImageList variant="homepage" />
        </Section>
      </div>
    </>
  );
};

export default Page;
