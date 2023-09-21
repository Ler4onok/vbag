import React from "react";
import NextImage from "next/image";

interface ImageProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
}

const Image = ({ src, alt = "", width = 320, height = 100 }: ImageProps) => {
  return <NextImage src={src} alt={alt} width={width} height={height}/>;
};

export default Image;
