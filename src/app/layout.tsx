import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { spaceGroteskRegular } from "@/fonts/fonts";

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
      <body className={spaceGroteskRegular.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
