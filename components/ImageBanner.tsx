import React from "react";

interface ImageBannerProps {
    name: string;
}

const ImageBanner = ({ name }: ImageBannerProps) => {
  return (
    <div className={`image-${name} w-full bg-cover bg-center h-[560px]`}></div>
  );
};

export default ImageBanner;
