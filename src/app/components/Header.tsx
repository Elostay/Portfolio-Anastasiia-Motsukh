import Link from "next/link";

import { dancingRegular } from "@/fonts/fonts";
import clsx from "clsx";
import DarkModeBtn from "./DarkModeBtn";
import HamburgerMenu from "./HamburgerMenu";

const Header = () => {
  return (
    <header className=" h-[60px] dark:bg-black dark:bg-opacity-10">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center ">
          <Link href="/" className={clsx("text-3xl", dancingRegular.className)}>
            Anastasiia
          </Link>
          <HamburgerMenu />
          <ul className=" gap-10 hidden md:flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
          <DarkModeBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
