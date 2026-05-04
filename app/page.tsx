"use client";

//COMPONENTS
import Prices from "./components/Prices";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Connections from "./components/Connections";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full overflow-hidden text-[#f5f5f5] bg-[#121212]">
      {/* HEADER */}
      {Header()}

      {/* HERO SECTION */}
      {Hero()}

      {/* Services */}
      {Services()}

       {/* Prices */}
      {Prices()}

      {/* Connections */}
      {Connections()}

      {/* FOOTER */}
      {Footer()}

    </div>
  );
}
