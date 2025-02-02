"use client";

import { useState } from "react";
import Link from "next/link";

const HamburgerMenu = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleMenu = () => {
    setIsBurgerOpen((prev) => !prev);
  };

  const closeBurger = () => {
    setIsBurgerOpen(false);
  };
  return (
    <div className="relative md:hidden ">
      <button
        className="flex flex-col justify-around items-center w-8 h-8 z-50 relative group"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-8 h-1 bg-white transform transition-transform duration-300 ${
            isBurgerOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />

        <span
          className={`block w-8 h-1 bg-white transform transition-opacity duration-300 ${
            isBurgerOpen ? "opacity-0" : ""
          }`}
        />

        <span
          className={`block w-8 h-1 bg-white transform transition-transform duration-300 ${
            isBurgerOpen ? "-rotate-45 -translate-y-3" : ""
          }`}
        />
      </button>

      <div
        className={`fixed top-0 left-0 w-full h-full bg-[#ebcca0] text-white  z-40 transform transition-all duration-300 ${
          isBurgerOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-8 items-center justify-center h-full text-xl">
          <li>
            <Link href="/" onClick={closeBurger}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/resume" onClick={closeBurger}>
              Resume
            </Link>
          </li>
          <li>
            <Link href="/projects" onClick={closeBurger}>
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HamburgerMenu;
