import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import WhatsAppButton from "./components/common/WhatsApp";
import SEO from "./components/common/SEO";
import Head from "next/head";
import { menu } from "./components/common/Menu";
import { metadata } from "./components/common/MetaData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content="{metadata.description}" />
        <meta property="og:title" content="{metadata.openGraph.title}" />
        <meta property="og:description" content="{metadata.openGraph.description}" />
        <meta property="og:url" content="{metadata.openGraph.url}" />
        <meta property="og:image" content="{metadata.openGraph.images[0].url}" />
        <meta name="twitter:card" content="{metadata.twitter.card}" />
        <meta name="twitter:title" content="{metadata.twitter.title}" />
        <meta name="twitter:description" content="{metadata.twitter.description}" />
        <meta name="twitter:image" content="{metadata.twitter.image}" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <style>{`
          .react-medium-image-zoom-overlay {
            background-color: rgba(110, 109, 109, 0.463) !important;
            backdrop-filter: blur(8px) !important;
          }
        `}</style>
      </Head>
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
