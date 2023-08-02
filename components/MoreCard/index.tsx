import React from "react";
import Image from "next/image";

interface MoreCardProps {
  img: string;
  alt: string;
  price: string;
  title: string;
  desc: string;
}

const MoreCard = ({ img, alt, price, title, desc }: MoreCardProps) => {
  return (
    <div className="flex gap-4 md:flex-nowrap flex-col lg:flex-row  w-full">
      <Image
        src={img}
        alt={alt}
        width={2320}
        height={3088}
        className="md:max-w-291 md:h-362 object-cover lg:max-w-225 xl:max-w-291 w-full "
      />
      <div className="xl:h-max xl:max-w-291 lg:py-4">
        <span className="font-krylon  text-2xl font-normal uppercase ">
          {price}
        </span>
        <h2 className="text-xl font-semibold lg:mt-4 lg:text-2xl">{title}</h2>
        <div className="border border-gray-300  opacity-30 lg:my-6"></div>
        <p className="text-sm font-normal opacity-60 lg:mb-4 xl:mb-6">{desc}</p>
        <span className="text-base font-semibold  ">Explore More</span>
      </div>
    </div>
  );
};

export default MoreCard;
