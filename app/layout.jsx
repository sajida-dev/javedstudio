import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Javed Studio",
  description: "Photography & Vediography",
};

export default function RootLayout({ children }) {
  const title = "Javed Studio";
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar title={title} button="Book Now" />
        {children}
        <Footer title={title} year={year} />
      </body>
    </html>
  );
}
