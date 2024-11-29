import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/Header";
import { spaceGroteskRegular } from "@/fonts/fonts";
import clsx from "clsx";

export const metadata: Metadata = {
  title: "Anastasiia Motsukh portfolio",
  description: "Anastasiia Motsukh portfolio",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", url: "/favicon/favicon-96x96.png" },
      { rel: "icon", type: "image/svg+xml", url: "/favicon/favicon.svg" },
    ],
    shortcut: "/favicon/favicon.ico",
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
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
