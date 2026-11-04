import type { Metadata } from "next";
import Link from "next/link";
import { pricingData, sizeOrder } from "../pricing-data";
import PrintButton from "./print-button";

export const metadata: Metadata = {
  title: "Árlista | FT Gumiszerviz",
  description: "Az FT Gumiszerviz aktuális gumiszerelési és kerékcsere árai.",
};

export default function PricesPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-4 py-8 text-slate-900 sm:px-6 print:min-h-0 print:bg-white print:p-0">
      <div className="mx-auto max-w-5xl rounded-3xl bg-white p-6 shadow-2xl sm:p-10 print:max-w-none print:rounded-none print:p-0 print:shadow-none">
        <header className="mb-8 flex items-start justify-between gap-6 border-b border-slate-200 pb-6 print:mb-5 print:pb-3">
          <div>
            <Link
              href="/"
              className="mb-3 inline-block text-sm font-bold text-red-600 hover:text-red-500 print:text-slate-900"
            >
              FT Gumiszerviz
            </Link>
            <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl print:text-2xl">
              Aktuális árlista
            </h1>
            <p className="mt-2 text-slate-600 print:mt-1 print:text-sm">
              Gumiszerelés és komplett kerékcsere, személygépkocsikhoz.
            </p>
          </div>
          <PrintButton />
        </header>

        <table className="w-full border-collapse text-left text-sm sm:text-base print:text-sm">
          <caption className="sr-only">Gumiszerelési és kerékcsere árak</caption>
          <thead>
            <tr className="bg-slate-900 text-white print:bg-slate-200 print:text-slate-900">
              <th scope="col" className="rounded-tl-lg px-4 py-3 font-bold">
                Keréktárcsa mérete
              </th>
              <th scope="col" className="px-4 py-3 font-bold">
                Gumiszerelés
                <span className="block text-xs font-normal opacity-75">
                  abroncs le- és felszerelés, centrírozás
                </span>
              </th>
              <th scope="col" className="rounded-tr-lg px-4 py-3 font-bold">
                Komplett kerékcsere
                <span className="block text-xs font-normal opacity-75">
                  4 kerék cseréje, centrírozás
                </span>
              </th>
            </tr>
          </thead>
          <tbody>
            {sizeOrder.map((size, index) => {
              const row = pricingData[size];
              return (
                <tr
                  key={size}
                  className={index % 2 === 0 ? "bg-slate-50" : "bg-white"}
                >
                  <th scope="row" className="border-b border-slate-200 px-4 py-3 font-bold">
                    {row.title}
                  </th>
                  <td className="border-b border-slate-200 px-4 py-3 font-semibold">
                    {row.tireSwap.price} <span className="font-normal text-slate-500">{row.tireSwap.suffix}</span>
                  </td>
                  <td className="border-b border-slate-200 px-4 py-3 font-semibold">
                    {row.wheelSwap.price} <span className="font-normal text-slate-500">{row.wheelSwap.suffix}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <footer className="mt-6 flex flex-col gap-1 text-sm text-slate-600 print:mt-4 print:text-xs">
          <p>Az árak szettenként értendők, és tájékoztató jellegűek.</p>
          <p>
            Időpontfoglalás: <strong>+36 20 485 6345</strong> · 1117 Budapest, Kondorosi út 2/A
          </p>
        </footer>
      </div>
    </main>
  );
}
