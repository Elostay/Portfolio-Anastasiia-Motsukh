"use client";
import Link from "next/link";

import { dancingRegular } from "@/fonts/fonts";
import clsx from "clsx";
import HamburgerMenu from "./HamburgerMenu";
import { GiThreeLeaves } from "react-icons/gi";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="h-[60px]  p-4 bg-primary-grey text-white">
      <div className="container mx-auto  flex items-center justify-between">
        <Link
          href="/"
          className={clsx(
            "text-3xl flex gap-3 items-center",
            dancingRegular.className
          )}
        >
          <p>Anastasiia</p>
          <GiThreeLeaves className="text-[#286d08]" />
        </Link>

        <ul className="gap-10 hidden md:flex justify-center items-center flex-grow">
          <li
            className={clsx(
              pathname === "/" && "border-b-4 rounded-sm  border-primary-milk"
            )}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={clsx(
              pathname === "/resume" &&
                "border-b-4 rounded-sm  border-primary-milk"
            )}
          >
            <Link href="/resume">Resume</Link>
          </li>
          <li
            className={clsx(
              pathname === "/projects" &&
                "border-b-4 rounded-sm  border-primary-milk"
            )}
          >
            <Link href="/projects">Projects</Link>
          </li>
        </ul>

        <HamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
