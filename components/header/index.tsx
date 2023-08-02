"use client";
import React, { useState, useEffect } from "react";

// animated icons
import UseAnimations from "react-useanimations";
import menu4 from "react-useanimations/lib/menu4";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [hideNav, setHideNav] = useState(true);

  const toggleMenu = () => {
    setToggle(!toggle);
    document.body.classList.toggle("menu-open", !toggle);
  };

  useEffect(() => {
    let prevScrollPos = window.scrollY;
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setHideNav(currentScrollPos < prevScrollPos);
      prevScrollPos = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {hideNav && (
        <header className="fixed w-full ">
          <nav className=" flex items-center justify-between glass-effect bg-white py-2 px-2   lg:px-4  ">
            <UseAnimations
              animation={menu4}
              size={30}
              onClick={toggleMenu}
              className="z-50 lg:hidden"
            />

            <div>
              <span className="font-aguafina text-2xl hidden lg:block">
                ElgeVibes
              </span>
            </div>

            <div>
              <ul className="lg:flex items-center gap-6  hidden">
                <li>MEN</li>
                <li>WOMEN</li>
                <li>WHAT&apos;S NEW</li>
                <li>PROMO</li>
                <li>ABOUT</li>
              </ul>
            </div>

            <div className={toggle ? "hidden" : "flex items-center gap-2"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-8 md:h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
          </nav>
          {toggle && (
            <nav className="bg-white fixed h-full  z-10 left-0 top-18 w-full  px-4 lg:hidden    ">
              <span className="font-aguafina text-2xl absolute -top-10 right-3 ">
                ElgeVibes
              </span>
              <ul className=" text-5xl  w-full grid gap-4  font-krylon mt-8 ">
                <li>MEN</li>
                <li>WOMEN</li>
                <li>WHAT&apos;S NEW</li>
                <li>PROMO</li>
                <li>ABOUT</li>
              </ul>
            </nav>
          )}
        </header>
      )}
    </>
  );
};

export default Header;
