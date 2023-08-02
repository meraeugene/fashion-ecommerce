import Card from "@/components/card";
import React from "react";
import omarImage from "../../public/images/gallery/omar.webp";
import michalImage from "../../public/images/gallery/michal.webp";
import oliviaImage from "../../public/images/gallery/olivia.webp";

const Gallery = () => {
  return (
    <div className="flex justify-center gap-8  flex-wrap my-20 px-4 md:gap-6 lg:my-32 ">
      <Card
        img={omarImage}
        title="Hoodies & Sweatshirt"
        alt="omar"
        className="md:mt-24"
      />
      <Card
        img={michalImage}
        title="Coats & Parkas"
        alt="michal"
        className="md:mt-12"
      />
      <Card img={oliviaImage} title="Tees & T-Shirt" alt="olivia" />
    </div>
  );
};

export default Gallery;
