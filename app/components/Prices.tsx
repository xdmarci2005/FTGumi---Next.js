import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function Prices() {
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
    <div className="">
      <section id="araink" className="py-24 bg-[#161616]">
        <div className="max-w-[1500px] mx-auto px-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-center text-3xl md:text-4xl mb-16 uppercase">
            Szolgáltatási <span className="text-[#f22323]">Áraink</span>
          </h2>

          <div className="md:overflow-x-auto mx-auto max-w-[100%] md:max-w-full">
            <div className="md:hidden max-h-[380px] overflow-y-auto px-2 pr-4 scrollbar-thin scrollbar-thumb-[#f22323] scrollbar-track-[#1e1e1e]">
              {/* Mobile View */}
              {priceData.map((row: any) => (
                <div
                  key={row.id}
                  className="bg-[#1e1e1e] border border-[#333] rounded-lg mb-5 shadow-md flex flex-col"
                >
                  <div className="relative p-4 pl-[45%] border-b border-[#2a2a2a] min-h-[50px] text-right">
                    <span className="absolute left-4 top-4 w-[40%] text-left font-semibold text-xs text-[#a0a0a0] uppercase">
                      Méret (COLL):
                    </span>
                    <span>{row.size}</span>
                  </div>
                  <div className="relative p-4 pl-[45%] border-b border-[#2a2a2a] min-h-[50px] text-right">
                    <span className="absolute left-4 top-4 w-[40%] text-left font-semibold text-xs text-[#a0a0a0] uppercase">
                      Gumiszerelés + kerékcsere (4db)
                    </span>
                    {row.gumi} Ft
                  </div>
                  <div className="relative p-4 pl-[45%] border-b border-[#2a2a2a] min-h-[50px] text-right">
                    <span className="absolute left-4 top-4 w-[40%] text-left font-semibold text-xs text-[#a0a0a0] uppercase">
                      Felnis kerékcsere (4db)
                    </span>
                    {row.kplc} Ft
                  </div>
                </div>
              ))}
              {specialPrices.map((row: any) => (
                <div
                  key={row.id}
                  className="bg-[#1e1e1e] border border-[#333] rounded-lg mb-5 shadow-md flex flex-col"
                >
                  <div className="relative p-4 pl-[45%] border-b border-[#2a2a2a] min-h-[50px] text-right">
                    <span className="absolute left-4 top-4 w-[40%] text-left font-semibold text-xs text-[#a0a0a0] uppercase">
                      Művelet ({row.ora_db ? "óra" : "db"}):
                    </span>
                    <span>{row.name}</span>
                  </div>
                  <div className="relative p-4 pl-[45%] border-b border-[#2a2a2a] min-h-[50px] text-right">
                    <span className="absolute left-4 top-4 w-[40%] text-left font-semibold text-xs text-[#a0a0a0] uppercase">
                      Ár
                    </span>
                    {row.priceFrom} - {row.priceTo} Ft
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <table className="hidden md:table w-full border-collapse bg-[#1e1e1e] rounded-lg overflow-hidden mb-8">
              <thead>
                <tr>
                  <th className="bg-[#f22323] text-white p-4 text-center font-semibold uppercase font-[family-name:var(--font-montserrat)] text-lg">
                    Méret (COLL)
                  </th>
                  <th className="bg-[#f22323] text-white p-4 text-center font-semibold uppercase font-[family-name:var(--font-montserrat)] text-lg">
                    Gumiszerelés + kerékcsere (4db)
                  </th>
                  <th className="bg-[#f22323] text-white p-4 text-center font-semibold uppercase font-[family-name:var(--font-montserrat)] text-lg">
                    Felnis kerékcsere (4db)
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row: any) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#ff6600]/5 transition-colors border-b border-[#2a2a2a] last:border-b-0"
                  >
                    <td className="p-4 text-[#f5f5f5] text-center">
                      {row.size}
                    </td>
                    <td className="p-4 text-[#f5f5f5] text-center">
                      {row.gumi} Ft
                    </td>
                    <td className="p-4 text-[#f5f5f5] text-center">
                      {row.kplc} Ft
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table className="hidden md:table w-full border-collapse bg-[#1e1e1e] rounded-lg overflow-hidden mb-8">
              <thead>
                <tr>
                  <th className="bg-[#f22323] text-white p-4 text-center font-semibold uppercase font-[family-name:var(--font-montserrat)] text-lg">
                    Művelet
                  </th>
                  <th className="bg-[#f22323] text-white p-4 text-center font-semibold uppercase font-[family-name:var(--font-montserrat)] text-lg">
                    Ár
                  </th>
                </tr>
              </thead>
              <tbody>
                {specialPrices.map((row: any) => (
                  <tr
                    key={row.id}
                    className="hover:bg-[#ff6600]/5 transition-colors border-b border-[#2a2a2a] last:border-b-0"
                  >
                    <td className="p-4 text-[#f5f5f5] text-center">
                      {row.name} ({row.ora_db ? "óra" : "db"})
                    </td>
                    <td className="p-4 text-[#f5f5f5] text-center">
                      {row.priceFrom} - {row.priceTo} Ft
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-center text-[#a0a0a0] italic mt-5">
            Áraink tájékoztató jellegűek, a változtatás jogát fenntartjuk.
            Megértésüket köszönjük.
          </p>
        </div>
      </section>
    </div>
  );
}
