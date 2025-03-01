import { Geist, Geist_Mono, Audiowide } from "next/font/google";
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

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ['latin'],
  weight: '400',
});

export const metadata = {
  title: "Javed Studio",
  description: "Photography & Vediography",
  icons: {
    icon: "https://github.com/sajida-dev/javedstudio/raw/master/app/logo.png",
  },
};

export default function RootLayout({ children }) {
  const title = "Javed Studio";
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <body
        // ${geistSans.variable} ${geistMono.variable} 
        className={` ${audiowide.variable}  antialiased`}
      >
        <Navbar title={title} button="Book Now" />
        {children}
        <Footer title={title} year={year} />
      </body>
    </html>
  );
}
