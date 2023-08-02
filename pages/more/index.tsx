import React from "react";
import MoreCard from "@/components/MoreCard";
import orangeDressImage from "../../public/images/more/orange.webp";
import whiteDressImage from "../../public/images/more/white.webp";

const More = () => {
  return (
    <div className="px-4 md:px-24 lg:px-8 xl:px-24">
      <div className="mb-7 lg:mb-12">
        <h1 className="font-krylon font-normal uppercase text-3xl md:text-6xl lg:text-8xl">
          More in the store
        </h1>
        <p className="text-lg capitalize  font-normal max-w-430 w-full mt-2 lg:max-w-full">
          —from artful depictions of reality to the further reaches of dreams
          and fantasy.
        </p>
      </div>
      <div className="flex flex-wrap gap-12 md:flex-nowrap md:gap-6  ">
        <MoreCard
          img={orangeDressImage}
          alt="orange dress"
          price="$490.0"
          title="Orange Summer Suit Button-Down + Tank + Jeans"
          desc=" You can log in to your account and change it from your Profile Edit
Profile. Then go to the general tab to change your email."
        />
        <MoreCard
          img={whiteDressImage}
          alt="white dress"
          price="$490.0"
          title="White Summer Suit Button-Down + Tank + Jeans"
          desc=" You can log in to your account and change it from your Profile Edit
Profile. Then go to the general tab to change your email."
        />
      </div>
    </div>
  );
};

export default More;
