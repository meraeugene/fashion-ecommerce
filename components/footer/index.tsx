import React from "react";

const Footer = () => {
  return (
    <div className="p-4 md:px-24 lg:px-8">
      <div className="xl:flex xl:justify-around">
        <div className="flex flex-col gap-4 lg:items-center xl:items-start xl:max-w-325">
          <h1 className="text-3xl font-aguafina">Elgevibes.</h1>
          <p className="text-gray text-lg">
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className="flex flex-wrap gap-12 mt-8 md:justify-between lg:justify-center ">
          <div className="gap-2 flex flex-col">
            <h2 className="font-bold ">Company</h2>
            <span className="text-gray">About</span>
            <span className="text-gray">Careers</span>
            <span className="text-gray">Mobile</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold ">Contact</h2>
            <span className="text-gray">Help/FAQ</span>
            <span className="text-gray">Press</span>
            <span className="text-gray">Affilates</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold ">More</h2>
            <span className="text-gray">Airlinefees</span>
            <span className="text-gray">Airline</span>
            <span className="text-gray">Low fare tips</span>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="font-bold ">Resources</h2>
            <span className="text-gray">Blog</span>
            <span className="text-gray">Collections</span>
            <span className="text-gray">Promo</span>
          </div>
        </div>
      </div>
      <p className="text-center mt-24 mb-6 text-gray text-sm">
        All rights villalon.andrew123@gmail.com
      </p>
    </div>
  );
};

export default Footer;
