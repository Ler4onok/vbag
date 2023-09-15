"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ImageListProps {
  variant?: string;
}

const ImageList = ({ variant }: ImageListProps) => {
  const handlePurchase = () => {
    alert("You bought this item!");
  };

  const images = [
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
      {images.map(({ name, src, price }) => (
        <div key={name}>
          <Image src={src} alt={name} width={320} height={100} />
          <p>{name}</p>
          <p>{`Price: ${price}`}</p>
          <button className="underline cursor-pointer" onClick={handlePurchase}>
            buy now
          </button>
        </div>
      ))}
    </div>
  );
};

export default ImageList;
