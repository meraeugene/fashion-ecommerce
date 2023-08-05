import React from "react";

const Hero = () => {
  return (
    <div className="hero-bg text-white px-4 md:px-0 pb-4 xl:px-0 ">
      <div className="flex items-center justify-center flex-col h-full gap-8 lg:pt-12 lg:pb-8">
        <h1 className="text-6xl xl:pt-16 font-normal  font-krylon text-center md:text-8xl lg:text-9xl xl:text-180   ">
          ELEGANT VIBES
        </h1>
        <div className="md:flex md:items-center md:border-t md:border-b md:border-white  w-full xl:items-center xl:flex xl:justify-center">
          <p
            className="text-sm font-normal  font-poppins text-center w-full md:text-sm md:max-w-293 xl:max-w-393 xl:text-base xl:p-8  xl:text-left
       "
          >
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <h2 className="font-krylon font-medium uppercase text-2xl text-center max-w-1100 w-full md:text-4xl md:text-left md:p-4  mt-4 md:mt-0 lg:text-6xl xl:text-7xl xl:max-w-850 xl:border-l xl:border-white md:border-l md:border-white">
            Wear the best and fashion on your look
          </h2>
        </div>

        <button
          type="button"
          className="text-lg font-normal font-poppins border border-white w-24 h-12 xl:h-20   rounded-full xl:text-2xl xl:w-36 "
        >
          SEE ALL
        </button>
      </div>
    </div>
  );
};

export default Hero;
