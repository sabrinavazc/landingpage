import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/sections/Header";

const inter = Inter({ 
  subsets: ["latin"],
  weights: ['bold', 'regular'],
 });

export const metadata: Metadata = {
  title: "Landing Page Test",
  description: "test jogga landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
