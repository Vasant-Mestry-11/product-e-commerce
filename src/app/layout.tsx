import type { Metadata } from "next";
import { Poppins, Princess_Sofia } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["devanagari", "latin", "latin-ext"],
});

const princesssofia = Princess_Sofia({
  weight: "400",
  variable: "--font-Princess_Sofia",
});

export const metadata: Metadata = {
  title: "Product Selling E-commerce",
  description: "online e-commerce product selling website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${princesssofia.variable}`}>
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
