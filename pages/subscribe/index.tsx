import React from "react";

const Subscribe = () => {
  return (
    <div className="my-20 px-4 md:px-24 max-w-709 mx-auto w-full lg:my-32 xl:max-w-1200">
      <h1 className="text-4xl  font-krylon font-normal capitalize text-center xl:text-9xl">
        Beauty is in the Eyes of the Beholder
      </h1>

      <div className="xl:max-w-640 xl:mx-auto">
        <p className="text-1xl capitalize font-normal text-center  my-9">
          —from artful depictions of reality to the further reaches of dreams
          and fantasy. These images began to form not only a person&apos;s
          living environment.
        </p>

        <div className="flex flex-col items-center gap-4 md:flex-row lg:flex-col xl:flex-row ">
          <input
            type="email"
            placeholder="Your email"
            className="border border-black w-full p-2 outline-none xl:p-4 "
          />
          <button
            type="button"
            className=" bg-black text-white py-2 px-4 font-poppins xl:p-4"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
