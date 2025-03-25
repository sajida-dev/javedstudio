import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/H";

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
  description: "Photography services",
};

export default function RootLayout({ children }) {
  const menu = [
        { label: "Home", href: "/" },
        { 
            label: "Services", 
            href: "/services",
            submenu: [
                { label: "Product Photography", href: "/services/product" },
                { label: "Couple Photography", href: "/services/couple" },
              { label: "Wedding Photograph", href: "/services/weddings" },
                { label: "Corporate Photograph", href: "/services/corporate" },
            ]
    },
        { label: "About Us", href: "/about" },
        { label: "Contact", href: "/contact" }
    ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header logo={"Javed studio"} menu={menu} themeColor="yellow"/>
        {children}
      </body>
    </html>
  );
}
