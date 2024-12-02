import Link from "next/link";

import { dancingRegular } from "@/fonts/fonts";
import clsx from "clsx";
import DarkModeBtn from "./DarkModeBtn";
import HamburgerMenu from "./HamburgerMenu";
import { GiThreeLeaves } from "react-icons/gi";

const Header = () => {
  return (
    <header className=" h-[60px] dark:bg-black dark:bg-opacity-10">
      <div className="container mx-auto p-4">
        <div className="flex justify-between items-center ">
          <Link
            href="/"
            className={clsx(
              "text-3xl flex gap-3 items-center",
              dancingRegular.className
            )}
          >
            <p> Anastasiia</p>
            <GiThreeLeaves className="text-[#086d0e]" />
          </Link>
          <HamburgerMenu />
          <ul className=" gap-10 hidden md:flex">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/resume">Resume</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
          </ul>
          <div className=" hidden md:block">
            <DarkModeBtn />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
