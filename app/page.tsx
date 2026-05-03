"use client";

import Image from "next/image";
//import { getDefaultAutoSelectFamilyAttemptTimeout } from 'node:net';
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";

//COMPONENTS
import Prices from "./components/Prices";
import Services from "./components/Services";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Connections from "./components/Connections";
import Footer from "./components/Footer";

export default function Home() {
  
  const [specialPrices, setSpecialPrices] = useState<any[]>([]);
  const [priceData, setPriceData] = useState<any[]>([]);
  

  useEffect(() => {
    const fetchPriceData = async () => {
      const { data, error } = await supabase
        .from("priceData")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("Error fetching price data:", error);
      } else {
        console.log("Fetched price data:", data);
        setPriceData(data || []);
      }
    };
    fetchPriceData();
  }, []);

  useEffect(() => {
    const fetchSpecialPrices = async () => {
      const { data, error } = await supabase
        .from("specialPrices")
        .select("*")
        .order("id", { ascending: true });

      
      if (error) { 
        console.error("Error fetching special prices:", error);
      } else {
        console.log("Fetched special prices:", data);
        setSpecialPrices(data || []);
      }
    };

    fetchSpecialPrices();
  }, []);

  

  return (
    <div className="w-full overflow-hidden text-[#f5f5f5] bg-[#121212]">
      {/* HEADER */}
      {Header()}

      {/* HERO SECTION */}
      {Hero()}

      {/* SZOLGÁLTATÁSOK */}
      {Services()}

       {/* ÁRAINK */}
      {Prices(priceData, specialPrices)}

      {/* KAPCSOLAT */}
      {Connections()}

      {/* FOOTER */}
      {Footer()}

    </div>
  );
}
