"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return <div className="w-full h-[60px] bg-[#ebcca0]"></div>;
};

export default Footer;
