"use client";

import ImageList from "@components/ImageList";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="image w-full h-4/5 bg-cover"></div>
      <div className="w-full">
        <div>
          <h3>Bags</h3>
          <ImageList variant="homepage" />
        </div>
      </div>
    </>
  );
};

export default Page;
