"use client";

import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return <div className="w-full h-[60px] bg-primary-grey"></div>;
};

export default Footer;
