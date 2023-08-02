import React from "react";
import Image from "next/image";

const Collection = () => {
  return (
    <div className="my-20 px-4 md:px-24 lg:my-32">
      <div className="">
        <h1 className="font-krylon  uppercase  font-normal text-3xl mb-4 md:text-6xl md:mb-6  lg:text-8xl ">
          TSHIRTS AND TOPS COLLECTION
        </h1>
      </div>

      <div className="flex  md:flex-nowrap gap-12 md:gap-8  flex-wrap md:flex-row-reverse xl:flex-row ">
        <div className="flex flex-col  ">
          <span className="text-2xl mb-2 font-normal uppercase font-krylon ">
            $490.0
          </span>
          <Image
            src="/images/collection/farol-portrait.webp"
            alt="farol pic"
            width={2182}
            height={2904}
            className="  object-cover   md:max-w-full w-full xl:max-w-391"
          />
        </div>

        <div className="flex flex-col gap-4">
          <p className="max-w-420 capitalize w-full  ">
            —from artful depictions of reality to the further reaches of dreams
            and fantasy. These images began to form not only a person&apos;s
            living environment.
          </p>
          <Image
            src="/images/collection/farol-landscape.webp"
            className="  object-cover  w-full xl:w-821 sm:w-full xl:h-616 lg:h-full md:h-full "
            width={2320}
            height={3088}
            alt="farol-landscape"
          />
        </div>
      </div>
    </div>
  );
};

export default Collection;
