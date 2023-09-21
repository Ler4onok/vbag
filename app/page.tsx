import Form from "@components/Form";
import Image from "@components/Image";
import ImageList from "@components/ImageList";
import Section from "@components/Section";
import React from "react";

const IMAGE_SRC = 'https://images.unsplash.com/photo-1572196284554-4e321b0e7e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80';

const Page = () => {
  return (
    <>
      <div className="image w-full h-4/5 bg-cover"></div>
      <div className="w-full">
        <Section name="Available now">
          <ImageList variant="homepage" />
        </Section>
        <Section name="Create custom">
          <div className="flex items-center justify-center gap-12">
            <Image src={IMAGE_SRC} alt="Custom bag" width={400} height={400} />
            <Form />
          </div>
        </Section>
      </div>
    </>
  );
};

export default Page;
