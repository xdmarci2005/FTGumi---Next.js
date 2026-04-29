"use client";



import Image from "next/image";
//import { getDefaultAutoSelectFamilyAttemptTimeout } from 'node:net';
import { useState, useEffect } from "react";

// Árlista adatok a tisztább kód érdekében
const priceData = [
  {
    size: "13 - 14 COLL (Lemezfelni / Alufelni)",
    op: "Szerelés + Centrír (4 db)",
    price: "19 000 Ft",
  },
  {
    size: "13 - 14 COLL Komplett (Felnis kerék)",
    op: "Le+Fel szerelés + Centrír (4 db)",
    price: "10 000 Ft",
  },
  {
    size: "15 COLL (Lemezfelni / Alufelni)",
    op: "Szerelés + Centrír (4 db)",
    price: "21 100 Ft",
  },
  {
    size: "15 COLL Komplett (Felnis kerék)",
    op: "Le+Fel szerelés + Centrír (4 db)",
    price: "10 500 Ft",
  },
  {
    size: "16 COLL (Lemezfelni / Alufelni)",
    op: "Szerelés + Centrír (4 db)",
    price: "23 200 Ft",
  },
  {
    size: "16 COLL Komplett (Felnis kerék)",
    op: "Le+Fel szerelés + Centrír (4 db)",
    price: "12 600 Ft",
  },
  {
    size: "17 COLL (Lemezfelni / Alufelni)",
    op: "Szerelés + Centrír (4 db)",
    price: "25 300 Ft",
  },
  {
    size: "17 COLL Komplett (Felnis kerék)",
    op: "Le+Fel szerelés + Centrír (4 db)",
    price: "14 700 Ft",
  },
  {
    size: "18 COLL (Lemezfelni / Alufelni)",
    op: "Szerelés + Centrír (4 db)",
    price: "27 400 Ft",
  },
  {
    size: "18 COLL Komplett (Felnis kerék)",
    op: "Le+Fel szerelés + Centrír (4 db)",
    price: "16 900 Ft",
  },
  {
    size: "19 - 20 COLL (Lemezfelni / Alufelni)",
    op: "Szerelés + Centrír (4 db)",
    price: "29 600 Ft",
  },
  {
    size: "19 - 20 COLL Komplett (Felnis kerék)",
    op: "Le+Fel szerelés + Centrír (4 db)",
    price: "19 000 Ft",
  },
  {
    size: "Gumi / Defektjavítás",
    op: "Munkadíj / db",
    price: "6 000 – 10 000 Ft",
  },
  {
    size: "Kiszállás kerékcserével",
    op: "Munkadíj / db",
    price: "7 000 – 10 000 Ft",
  },
  { size: "Autószerelés", op: "Munkadíj / óra", price: "15 000 – 17 000 Ft" },
  {
    size: "Autószerelés (Hozott alkatrész)",
    op: "Munkadíj / óra",
    price: "18 000 – 20 000 Ft",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    "/siteImages/slide1.jpg",
    "/siteImages/slide2.jpg",
    "/siteImages/slide3.jpg",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="w-full overflow-hidden text-[#f5f5f5] bg-[#121212]">
      {/* HEADER */}
      <header className="w-full bg-[#121212] border-b-2 border-[#f22323]">
        <div className="max-w-375 mx-auto px-4 py-5 flex justify-between items-center">
          <div className="hidden md:block ml-0 lg:ml-24">
            <Image
              src="/siteImages/ft-pajzs.png"
              alt="Logo"
              className="w-[100px]"
              width={100}
              height={100}
            />
          </div>
          <nav>
            <ul className="hidden md:flex gap-8 mr-0 lg:mr-24 list-none">
              {["Kezdőlap", "Szolgáltatások", "Áraink", "Kapcsolat"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase().replace(/á/g, "a").replace(/ó/g, "o")}`}
                      className="font-semibold uppercase text-sm tracking-wide transition-colors duration-300 hover:text-[#f22323]"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section
        id="kezdolap"
        className="relative flex items-center justify-center text-center min-h-[80vh] py-32 overflow-hidden"
      >
        {/* Slideshow */}
        <div className="absolute top-0 left-0 w-full h-full z-0">
          {slides.map((bg, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-[1500ms] ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
              style={{ backgroundImage: `url('${bg}')` }}
            />
          ))}
          {/* Overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/60 to-black/80 z-10" />
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-[1500px] mx-auto px-4">
          <h1 className="font-[family-name:var(--font-montserrat)] text-4xl md:text-6xl mb-5 leading-tight text-white flex justify-center">
            <Image
              src="/siteImages/ft-full-logo.png"
              alt="FT Gumiszerviz"
              className="w-[300px] md:w-[400px]"
              height={10}
              width={300}
            />
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-[600px] mx-auto">
            Minden egy helyen az autójának! Új gumiabroncsok, futóműszerviz,
            olajcsere és vizsgáztatás Budapest 11. kerületében.
          </p>
          <a
            href="#kapcsolat"
            className="inline-block bg-[#f22323] text-white px-8 py-4 rounded-md font-semibold font-[family-name:var(--font-montserrat)] uppercase transition-all duration-300 hover:bg-[#e65c00] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,102,0,0.3)]"
          >
            Időpontot Kérek
          </a>
        </div>
      </section>

      {/* SZOLGÁLTATÁSOK */}
      <section
        id="szolgaltatasok"
        className="py-24 max-w-[1500px] mx-auto px-4"
      >
        <h2 className="font-[family-name:var(--font-montserrat)] text-center text-3xl md:text-4xl mb-16 uppercase">
          Nálunk <span className="text-[#f22323]">Elérhető</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Kártya 1 */}
          <div className="bg-[#1e1e1e] p-8 rounded-xl text-center transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-[#f22323] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <div className="text-[#f22323] mb-5 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="8" />
                <line x1="12" y1="16" x2="12" y2="22" />
                <line x1="2" y1="12" x2="8" y2="12" />
                <line x1="16" y1="12" x2="22" y2="12" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl mb-5 text-[#f22323]">
              Gumiszerviz
            </h3>
            <ul className="text-left text-[#a0a0a0] space-y-2">
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Új gumiabroncsok értékesítése, szerelése
              </li>
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Könnyűfém felnik, keréktárcsák értékesítése
              </li>
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Komplett felni felújítása
              </li>
            </ul>
          </div>

          {/* Kártya 2 */}
          <div className="bg-[#1e1e1e] p-8 rounded-xl text-center transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-[#f22323] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <div className="text-[#f22323] mb-5 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl mb-5 text-[#f22323]">
              Gyorsszerviz
            </h3>
            <ul className="text-left text-[#a0a0a0] space-y-2">
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Olajcsere, gyorsszerviz
              </li>
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Fékberendezések javítása
              </li>
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Futóműszerviz, vizsgáztatás
              </li>
            </ul>
          </div>

          {/* Kártya 3 */}
          <div className="bg-[#1e1e1e] p-8 rounded-xl text-center transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-[#f22323] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <div className="text-[#f22323] mb-5 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
                <path d="M15 18H9" />
                <path d="M19 18h2a1 1 0 0 0 1-1v-5l-4-4h-3v11a1 1 0 0 0 1 1z" />
                <circle cx="7" cy="18" r="2" />
                <circle cx="17" cy="18" r="2" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl mb-5 text-[#f22323]">
              Bérlés & Mentés
            </h3>
            <ul className="text-left text-[#a0a0a0] space-y-2">
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Teherautó bérlés (B kategória)
              </li>
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Utánfutó kölcsönzés
              </li>
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Helyszíni mentés és segélyszolgálat
              </li>
            </ul>
          </div>

          {/* Kártya 4 */}
          <div className="bg-[#1e1e1e] p-8 rounded-xl text-center transition-all duration-300 border-b-4 border-transparent hover:-translate-y-2 hover:border-[#f22323] hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]">
            <div className="text-[#f22323] mb-5 flex justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                <path d="M9 22v-4h6v4" />
                <path d="M8 6h.01" />
                <path d="M16 6h.01" />
                <path d="M12 6h.01" />
                <path d="M12 10h.01" />
                <path d="M12 14h.01" />
                <path d="M16 10h.01" />
                <path d="M16 14h.01" />
                <path d="M8 10h.01" />
                <path d="M8 14h.01" />
              </svg>
            </div>
            <h3 className="font-[family-name:var(--font-montserrat)] text-xl mb-5 text-[#f22323]">
              Tárolás
            </h3>
            <ul className="text-left text-[#a0a0a0] space-y-2">
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Biztonságos keréktárolás (Gumi hotel)
              </li>
              <li className="relative pl-6 before:content-['✓'] before:text-[#f22323] before:absolute before:left-0 before:font-bold">
                Flottakezelés cégek részére
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ÁRAINK */}
      <section id="araink" className="py-24 bg-[#161616]">
        <div className="max-w-[1500px] mx-auto px-4">
          <h2 className="font-[family-name:var(--font-montserrat)] text-center text-3xl md:text-4xl mb-16 uppercase">
            Szolgáltatási <span className="text-[#f22323]">Áraink</span>
          </h2>

          <div className="md:overflow-x-auto mx-auto max-w-[100%] md:max-w-full">
            <div className="md:hidden max-h-[380px] overflow-y-auto px-2 pr-4 scrollbar-thin scrollbar-thumb-[#f22323] scrollbar-track-[#1e1e1e]">
              {/* Mobile View */}
              {priceData.map((row, idx) => (
                <div
                  key={idx}
                  className="bg-[#1e1e1e] border border-[#333] rounded-lg mb-5 shadow-md flex flex-col"
                >
                  <div className="relative p-4 pl-[45%] border-b border-[#2a2a2a] min-h-[50px] text-right">
                    <span className="absolute left-4 top-4 w-[40%] text-left font-semibold text-xs text-[#a0a0a0] uppercase">
                      Méret:
                    </span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: row.size.replace("(", "<br/>("),
                      }}
                    ></span>
                  </div>
                  <div className="relative p-4 pl-[45%] border-b border-[#2a2a2a] min-h-[50px] text-right">
                    <span className="absolute left-4 top-4 w-[40%] text-left font-semibold text-xs text-[#a0a0a0] uppercase">
                      Művelet:
                    </span>
                    {row.op}
                  </div>
                  <div className="relative p-4 pl-[45%] bg-[#f22323]/5 min-h-[50px] text-right text-lg">
                    <span className="absolute left-4 top-4 w-[40%] text-left font-semibold text-xs text-[#f22323] uppercase">
                      Ár:
                    </span>
                    <span className="font-bold text-[#f22323]">
                      {row.price}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop View */}
            <table className="hidden md:table w-full border-collapse bg-[#1e1e1e] rounded-lg overflow-hidden mb-8">
              <thead>
                <tr>
                  <th className="bg-[#f22323] text-white p-4 text-left font-semibold uppercase font-[family-name:var(--font-montserrat)] text-lg">
                    Méret / Szolgáltatás
                  </th>
                  <th className="bg-[#f22323] text-white p-4 text-left font-semibold uppercase font-[family-name:var(--font-montserrat)] text-lg">
                    Művelet
                  </th>
                  <th className="bg-[#f22323] text-white p-4 text-right font-semibold uppercase font-[family-name:var(--font-montserrat)] text-lg">
                    Ár (HUF)
                  </th>
                </tr>
              </thead>
              <tbody>
                {priceData.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-[#ff6600]/5 transition-colors border-b border-[#2a2a2a] last:border-b-0"
                  >
                    <td className="p-4 text-[#f5f5f5]">
                      {/* Egyszerű formázás: az első részt vastagítjuk, ha illeszkedik a mintára */}
                      {row.size.includes("COLL") ? (
                        <>
                          <strong>
                            {row.size.split(" ")[0]} {row.size.split(" ")[1]}{" "}
                            {row.size.split(" ")[2]}
                          </strong>{" "}
                          {row.size.substring(row.size.indexOf("COLL") + 4)}
                        </>
                      ) : (
                        <strong>{row.size}</strong>
                      )}
                    </td>
                    <td className="p-4 text-[#f5f5f5]">{row.op}</td>
                    <td className="p-4 font-bold text-[#f22323] text-right whitespace-nowrap">
                      {row.price}
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

      {/* KAPCSOLAT */}
      <section id="kapcsolat" className="py-24 max-w-[1500px] mx-auto px-4">
        <h2 className="font-[family-name:var(--font-montserrat)] text-center text-3xl md:text-4xl mb-16 uppercase">
          Lépjen velünk <span className="text-[#f22323]">Kapcsolatba</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info doboz */}
          <div className="bg-[#1e1e1e] p-10 rounded-xl">
            <div className="flex items-start gap-4 mb-8">
              <div className="text-[#f22323] mt-1 shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl mb-1 text-[#f5f5f5] font-[family-name:var(--font-montserrat)]">
                  Címünk
                </h4>
                <p className="text-[#a0a0a0]">
                  1117 Budapest, Kondorosi út 2/A
                  <br />
                  GPS: É 47.449763, K 19.048898
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="text-[#f22323] mt-1 shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl mb-1 text-[#f5f5f5] font-[family-name:var(--font-montserrat)]">
                  Telefonszámok
                </h4>
                <p className="text-[#a0a0a0]">
                  +36 1 206 2250
                  <br />
                  +36 20 485 6345
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="text-[#f22323] mt-1 shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl mb-1 text-[#f5f5f5] font-[family-name:var(--font-montserrat)]">
                  Email
                </h4>
                <p>
                  <a
                    href="mailto:ftgumi@gmail.com"
                    className="text-[#a0a0a0] hover:text-[#f22323] transition-colors"
                  >
                    ftgumi@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-[#f22323] mt-1 shrink-0">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <h4 className="text-xl mb-1 text-[#f5f5f5] font-[family-name:var(--font-montserrat)]">
                  Nyitvatartás
                </h4>
                <p className="text-[#a0a0a0]">
                  Hétfő - Péntek: 08:00 - 16:30
                  <br />
                  Szombat: Telefonos egyeztetés alapján
                  <br />
                  Vasárnap: Zárva
                </p>
              </div>
            </div>
          </div>

          {/* Térkép helykitöltő */}
          <div className="bg-[#1e1e1e] border-2 border-dashed border-[#333] rounded-xl flex flex-col items-center justify-center p-10 text-center min-h-[400px]">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f22323"
              strokeWidth="1.5"
              className="mb-5"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h2 className="text-lg mb-4">Találjanak meg minket itt</h2>
            <div className="w-full h-full min-h-[250px] bg-[#121212] rounded flex items-center justify-center text-[#a0a0a0]">
              {/* Ide mehet az élő Google Maps iframe, pl.: */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.587216634351!2d19.04632307684074!3d47.44976297117462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741ddb43525287f%3A0xc3c9f285fb70a1a4!2sBudapest%2C%20Kondorosi%20%C3%BAt%202%2Fa%2C%201116!5e0!3m2!1shu!2shu!4v1714400000000!5m2!1shu!2shu"
                className="w-full h-full border-0 rounded"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0a0a0a] text-center py-8 border-t border-[#2a2a2a]">
        <div className="max-w-375 mx-auto px-4">
          <div className="flex justify-center gap-5 mb-5 flex-wrap text-[#a0a0a0] font-bold text-sm md:text-lg tracking-widest">
            <span>HANKOOK</span> • <span>FIRESTONE</span> •{" "}
            <span>BRIDGESTONE</span>
          </div>
          <p className="text-[#a0a0a0] text-xs md:text-sm">
            © 2013 - 2026 | FT Gumiszerviz Kft. Minden jog fenntartva.
          </p>
        </div>
      </footer>
    </div>
  );
}
