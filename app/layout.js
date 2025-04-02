import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsApp";
import SEO from "./components/common/SEO";

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
    { label: "About Us", href: "/about" },
    {
      label: "Services",
      href: "/services",
      submenu: [
        { label: "Baby Photography", href: "/service/baby" },
        { label: "Product Photography", href: "/service/product" },
        { label: "Couple Photography", href: "/service/couple" },
        { label: "Wedding Photography", href: "/service/weddings" },
        { label: "Corporate Photography", href: "/service/corporate" },
      ]
    },
    { label: "Contact Us", href: "/contact" }
  ];
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SEO />
        <Header logo={"Javed Studio"} menu={menu} themeColor="yellow" />
        {children}
        <WhatsAppButton />
        <Footer logo={"Javed Studio"} address={"Main Bazar Jauharabad."} />
      </body>
    </html>
  );
}
