import React from "react";
import Image from "next/image";

const Tshirt = () => {
  return (
    <>
      <h1 className="uppercase font-krylon text-4xl font-normal mb-6 px-4 md:px-8 md:text-6xl lg:text-8xl xl:px-16">
        Tshirt and tops
      </h1>
      <div className="flex gap-4 flex-wrap md:px-8 lg:flex-nowrap xl:px-16 xl:mt-12 xl:gap-16">
        <Image
          src="/images/tshirt/renaisha.webp"
          alt="renaisha pic"
          width={4096}
          height={2731}
          className="max-w-709 w-full h-751 object-cover md:max-w-325 md:h-auto lg:max-w-600 lg:h-auto xl:max-w-709 "
        />
        <div className="flex flex-col px-4">
          <div className="mb-4 text-lg ">
            <p className="font-bold"> Series Name</p>
            <span>Dream reality in another world</span>
          </div>
          <div className="mb-4 text-lg">
            <p className=" font-bold">Photographer</p>
            <span>Julie Mars</span>
          </div>
          <div className="mb-10 text-lg">
            <p className=" font-bold">Model</p>
            <span>Renaisha Vanderwill</span>
          </div>
          <p className="max-w-330 capitalize text-lg font-normal">
            This dark, mysterious visual story has no narrator — is it a
            cinematic sequence of a child&apos;s memories, a dream, a diary, a
            nightmare? Your other selves are out there somewhere—alternative
            versions of you from moments that could have been or will be in the
            future. But what if all of these selves came together at the same
            time...?
          </p>
          <div className="mt-8 border-2 border-orange rounded-full max-w-118 h-118 w-full flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="41"
              height="41"
              viewBox="0 0 41 41"
              fill="none"
            >
              <path
                d="M22.7071 35.9155L37.3149 20.8903L22.7071 5.86519M37.3149 20.8903H3.92566H37.3149Z"
                stroke="#DF6951"
                strokeWidth="3.25225"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tshirt;
