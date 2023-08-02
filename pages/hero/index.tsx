import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg text-white px-4 md:px-0 xl:pb-14 xl:pt-4">
      <div className="flex items-center justify-center flex-col h-full gap-8">
        <h1 className="text-6xl  font-normal  font-krylon text-center md:text-8xl lg:text-9xl xl:text-160 xl:font-bold ">
          ELEGANT VIBES
        </h1>
        <div className="md:flex md:items-center md:border-t md:border-b md:border-white w-full">
          <p className="text-sm font-normal  font-poppins text-center w-full md:text-sm md:max-w-293 xl:text-base xl:p-12 xl:max-w-330 xl:text-left">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <h2 className="font-krylon font-medium uppercase text-2xl text-center max-w-1100 w-full md:text-4xl md:text-left md:p-4 md:border-l md:border-white mt-4 md:mt-0 lg:text-6xl xl:text-8xl">
            Wear the best and fashion on your look
          </h2>
        </div>

        <button
          type="button"
          className="text-xl font-normal font-poppins border border-white w-24 h-24  rounded-full xl:text-2xl xl:h-28 xl:w-28"
        >
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Hero;
