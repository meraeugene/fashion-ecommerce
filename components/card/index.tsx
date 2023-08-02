import React from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  img: StaticImageData;
  title: string;
  alt: string;
  className?: string;
}

const Card = ({ img, title, alt, className }: CardProps) => {
  return (
    <div className={className}>
      <Image
        src={img}
        alt={alt}
        className="w-full max-w-391 md:h-362 md:max-w-225 object-cover lg:max-w-391 xl:max-w-full"
        width={4096}
        height={2804}
        placeholder="blur"
      />
      <p className="text-title text-xl font-semibold tracking-tight font-poppins mt-4">
        {title}
      </p>
      <span>Explore Now!</span>
    </div>
  );
};

export default Card;
