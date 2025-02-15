import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/hero";



export default async function Home() {
  const title = "Javed Studio";
  const year = new Date().getFullYear();
  return (
    <>
      <Navbar title={title} button="Book Now" />
      <Hero />
      <Footer title={title} year={year}/>
    </>
  );
}
