import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pricingData, sizeOrder } from "../pricing-data";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: "Árlista | FT Gumiszerviz",
  description: "Az FT Gumiszerviz aktuális gumiszerelési és kerékcsere árai.",
};

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-900 sm:px-6 print:min-h-screen print:bg-white print:p-0">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl sm:p-10 print:min-h-screen print:max-w-none print:rounded-none print:p-0 print:shadow-none">
        <header className="relative mb-8 flex items-start justify-between gap-6 overflow-hidden border-b-2 border-slate-950 pb-6 sm:mb-10 print:mb-8 print:pb-6">
          <div className="relative z-10">
            <Link
              href="/"
              className="mb-5 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-red-600 hover:text-red-500 print:text-slate-950"
            >
              <Image
                src="/siteImages/ft-pajzs.png"
                alt="FT"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              Gumiszerviz
            </Link>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.28em] text-slate-500 print:text-slate-700">
              Személyautó szerviz
            </p>
            <h1 className="text-4xl font-black tracking-tight text-slate-950 sm:text-6xl print:text-5xl">
              Aktuális árlista
            </h1>
            <p className="mt-3 max-w-xl text-base text-slate-600 sm:text-lg print:mt-2 print:text-base">
              Gumiszerelés és komplett kerékcsere, személygépkocsikhoz.
            </p>
          </div>
          <div className="relative z-10 pt-1">
            <PrintButton />
          </div>
          <div className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full border-[34px] border-red-50 print:border-slate-100" />
        </header>

        <section className="flex-1" aria-labelledby="price-table-title">
          <div className="mb-4 flex items-end justify-between gap-4 print:mb-3">
            <h2 id="price-table-title" className="text-sm font-black uppercase tracking-[0.2em] text-slate-950">
              Szolgáltatási díjak
            </h2>
            <p className="text-right text-xs font-semibold text-slate-500 print:text-slate-700">
              Minden ár bruttó ár
            </p>
          </div>
          <table className="w-full border-separate border-spacing-0 overflow-hidden rounded-2xl border-2 border-slate-950 text-left text-sm sm:text-base print:rounded-none print:text-base">
          <caption className="sr-only">Gumiszerelési és kerékcsere árak</caption>
            <thead>
              <tr className="bg-slate-950 text-white print:bg-white print:text-slate-950">
              <th scope="col" className="w-[28%] border-b-2 border-slate-950 px-4 py-5 font-black sm:px-6 print:py-4">
                Keréktárcsa mérete
              </th>
              <th scope="col" className="border-b-2 border-l border-slate-700 px-4 py-5 font-black sm:px-6 print:border-slate-950 print:py-4">
                <span className="block text-lg">Gumiszerelés</span>
                <span className="mt-1 block text-xs font-normal opacity-75">abroncs le- és felszerelés, centrírozás</span>
              </th>
              <th scope="col" className="border-b-2 border-l border-slate-700 px-4 py-5 font-black sm:px-6 print:border-slate-950 print:py-4">
                <span className="block text-lg">Komplett kerékcsere</span>
                <span className="mt-1 block text-xs font-normal opacity-75">4 kerék cseréje, centrírozás</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sizeOrder.map((size, index) => {
              const row = pricingData[size];
              return (
                <tr
                  key={size}
                  className={index % 2 === 0 ? "bg-slate-50 print:bg-slate-50" : "bg-white"}
                >
                  <th scope="row" className="border-b border-slate-200 px-4 py-5 font-black sm:px-6 sm:text-lg print:border-slate-300 print:py-5">
                    {row.title}
                  </th>
                  <td className="border-b border-l border-slate-200 px-4 py-5 sm:px-6 print:border-slate-300">
                    <strong className="text-lg font-black sm:text-xl">{row.tireSwap.price}</strong>{" "}
                    <span className="text-xs font-medium text-slate-500 print:text-slate-700">{row.tireSwap.suffix}</span>
                  </td>
                  <td className="border-b border-l border-slate-200 px-4 py-5 sm:px-6 print:border-slate-300">
                    <strong className="text-lg font-black sm:text-xl">{row.wheelSwap.price}</strong>{" "}
                    <span className="text-xs font-medium text-slate-500 print:text-slate-700">{row.wheelSwap.suffix}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
          </table>
        </section>

        <footer className="mt-8 grid gap-4 border-t-2 border-slate-950 pt-5 text-sm text-slate-600 sm:grid-cols-[1fr_auto] print:mt-8 print:pt-5 print:text-sm">
          <div>
            <p className="font-bold text-slate-950">Az árak szettenként értendők, tájékoztató jellegűek.</p>
            <p className="mt-1">Más munkafolyamatok és extra szolgáltatások külön egyeztetés alapján.</p>
          </div>
          <div className="sm:text-right">
            <p className="font-black text-slate-950">Időpontfoglalás</p>
            <p className="mt-1 font-bold text-slate-950">+36 20 485 6345</p>
            <p>1117 Budapest, Kondorosi út 2/A</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
