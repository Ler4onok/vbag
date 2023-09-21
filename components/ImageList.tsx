"use client";
import Link from "next/link";
import React from "react";
import Image from "@components/Image";

interface ImageListProps {
  variant?: string;
}

interface ImageProps {
  name: string;
  price: string;
  src: string;
}

const ImageList = ({ variant }: ImageListProps) => {
  const handlePurchase = () => {
    alert("You bought this item!");
  };

  const images: Array<ImageProps> = [
    {
      name: "Foggy Day",
      price: "$100",
      src: "https://images.unsplash.com/photo-1575426553509-3c6953fdf9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    },
    {
      name: "Heart Line Art",
      price: "$100",

      src: "https://images.unsplash.com/photo-1575426553509-3c6953fdf9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    },
    {
      name: "Cat Cute",
      price: "$100",

      src: "https://images.unsplash.com/photo-1575426553509-3c6953fdf9b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80",
    },
  ];

  return (
    <div className="flex gap-12">
      {images.map(({ name, src, price }: ImageProps ) => (
        <div key={name}>
          <Image src={src} alt={name}  />
          <p>{name}</p>
          <p>{`Price: ${price}`}</p>
          <button onClick={handlePurchase}>
            buy now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
