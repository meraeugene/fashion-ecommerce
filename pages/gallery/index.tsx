import Card from "@/components/card";
import React from "react";

const Gallery = () => {
  return (
    <div className="flex justify-center gap-8  flex-wrap my-20 px-4 md:gap-6 lg:my-32 ">
      <Card
        img="/images/gallery/omar.webp"
        title="Hoodies & Sweatshirt"
        alt="omar"
        className="md:mt-24"
      />
      <Card
        img="/images/gallery/michal.webp"
        title="Coats & Parkas"
        alt="michal"
        className="md:mt-12"
      />
      <Card
        img="/images/gallery/olivia.webp"
        title="Tees & T-Shirt"
        alt="olivia"
      />
    </div>
  );
};

export default Gallery;
