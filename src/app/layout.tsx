import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import { spaceGroteskRegular } from "@/fonts/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Anastasiia Motsukh portfolio",
  description: "Anastasiia Motsukh portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx("overflow-hidden", spaceGroteskRegular.className)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
