import type { Metadata } from "next";

import "./globals.css";
import { Footer, Navbar } from "./Component";


export const metadata: Metadata = {
  title: "Car hub",
  description: "Discover best cars ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
