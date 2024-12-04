import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { spaceGroteskRegular } from "@/fonts/fonts";
import clsx from "clsx";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Anastasiia Motsukh portfolio",
  description: "Anastasiia Motsukh portfolio",
  icons: {
    icon: [
      { rel: "icon", type: "image/png", url: "/favicon.ico" },
      { rel: "icon", type: "image/svg+xml", url: "/icon.svg" },
    ],
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={clsx(
          spaceGroteskRegular.className,
          "min-h-screen flex flex-col"
        )}
      >
        <Header />

        <main className="flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
