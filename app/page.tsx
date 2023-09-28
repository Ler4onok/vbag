'use client';
import Form from "@components/Form";
import Image from "@components/Image";
import ImageList from "@components/ImageList";
import Section from "@components/Section";
import React, { useEffect, useState } from "react";

// todo: add translations lib 
const commonTextStyles = "w-[400px] text-center text-lg pb-8 leading-none";
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
            <Image
              src="/assets/customBag.png"
              alt="Custom bag"
              width={400}
              height={400}
            />
            <div>
              <p className={commonTextStyles}>
                Fill the form and upload the design you want to have on your
                shopper.
              </p>
              <p className={commonTextStyles}>
                We will contact you soon.
              </p>
              <Form />
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Page;
