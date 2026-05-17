"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Phone,
  MapPin,
  Droplet,
  CarFront,
  Wrench,
  Archive,
  ChevronRight,
  CheckCircle2,
  Calendar,
  Star,
  Clock,
  Disc,
  Settings,
} from "lucide-react";

const BUSINESS_NAME = "FT Gumiszerviz";
const BUSINESS_PHONE = "+36 20 485 6345";
const BUSINESS_ADDRESS = "1117 Budapest, Kondorosi út 2/A";

// Kiterjesztett Structured Data a Local SEO dominanciához (2026-os sztenderd)
const schemaData = {
  "@context": "https://schema.org",
  "@type": ["TireShop", "AutoRepair"],
  name: BUSINESS_NAME,
  telephone: BUSINESS_PHONE,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Kondorosi út 2/A",
    addressLocality: "Budapest",
    postalCode: "1117",
    addressCountry: "HU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "47.45892",
    longitude: "19.03541",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "16:30",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "342",
  },
};

// A kibővített árazási adatmodell, amely tartalmazza mindkét szolgáltatástípus árait és tulajdonságait
const pricingData = {
  "13-14": {
    title: '13" - 14" Méret',
    tireSwap: {
      price: "19 000 Ft",
      suffix: "/ szett",
    },
    wheelSwap: {
      price: "10 000 Ft",
      suffix: "/ szett",
    },
  },
  "15": {
    title: '15" Méret',
    tireSwap: {
      price: "21 000 Ft",
      suffix: "/ szett",
    },
    wheelSwap: {
      price: "10 500 Ft",
      suffix: "/ szett",
    },
  },
  "16": {
    title: '16" Méret',
    tireSwap: {
      price: "23 200 Ft",
      suffix: "/ szett",
    },
    wheelSwap: {
      price: "12 600 Ft",
      suffix: "/ szett",
    },
  },
  "17": {
    title: '17" Méret',
    tireSwap: {
      price: "25 300 Ft",
      suffix: "/ szett",
    },
    wheelSwap: {
      price: "14 700 Ft",
      suffix: "/ szett",
    },
  },
  "18": {
    title: '18" Méret',
    tireSwap: {
      price: "27 400 Ft",
      suffix: "/ szett",
    },
    wheelSwap: {
      price: "16 900 Ft",
      suffix: "/ szett",
    },
  },
  "19-20": {
    title: '19" - 20" Méret',
    tireSwap: {
      price: "29 600 Ft",
      suffix: "/ szett",
    },
    wheelSwap: {
      price: "19 000 Ft",
      suffix: "/ szett",
    },
  },
} as const;

const serviceFeatures = {
  tireSwap: [
    "Abroncsok le- és felszerelése",
    "Centrírozás",
    "Állapotfelmérés",
    "Guminyomás beállítása",
  ],
  wheelSwap: [
    "4 komplett kerék cseréje",
    "Centrírozás",
    "Állapotfelmérés",
    "Guminyomás beállítása",
  ],
} as const;

type PricingData = typeof pricingData;
type SizeKey = keyof PricingData;
type ServiceKey = "tireSwap" | "wheelSwap";

const additionalServices = [
  {
    id: "olaj",
    title: "Olajcsere",
    desc: "Prémium minőségű motorolajok és szűrők cseréje gyári specifikációk szerint.",
    icon: Droplet,
    colSpan: 1,
  },
  {
    id: "futomu",
    title: "Fék, futóműjavítás, kisebb elektromos javítások",
    desc: "Teljes körű diagnosztika és javítás a biztonságos közlekedésért. Gyors, szakszerű szolgáltatás.",
    icon: Settings,
    colSpan: 1,
  },
  {
    id: "defekt",
    title: "Defektjavítás",
    desc: "Gyors, szakszerű javítás vulkanizálással. Azonnali segítség baj esetén.",
    icon: Wrench,
    colSpan: 1,
  },
  {
    id: "hotel",
    title: "Gumi Tárolás (Hotel)",
    desc: "Biztonságos, szakszerű, napfénytől és nedvességtől védett gumihotel klímakontrollal.",
    icon: Archive,
    colSpan: 1,
  },
  {
    id: "berauto",
    title: "Bérautó Szolgáltatás",
    desc: "Kisebb és nagyobb furgonok bérelhetők cipekedéshez, költözéshez és szállításhoz.",
    icon: CarFront,
    colSpan: 2,
  },
];

const sizeOrder: SizeKey[] = ["13-14", "15", "16", "17", "18", "19-20"];

const placeholderImages = Array.from({ length: 23 }, (_, idx) => {
  const fileName = `slide (${idx + 1}).jpg`;
  return `/siteImages/slides/${encodeURIComponent(fileName)}`;
});

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [activeSize, setActiveSize] = useState<SizeKey>("16");
  const [serviceType, setServiceType] = useState<ServiceKey>("tireSwap"); // "tireSwap" vagy "wheelSwap"
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const navHeight =
      (document.querySelector("nav") as HTMLElement | null)?.offsetHeight ?? 0;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navHeight - 16;
    window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });
  };

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % placeholderImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0f1a] text-slate-100 font-sans selection:bg-red-600/30 overflow-x-hidden">
      {/* Navbar - Adaptív Glassmorphism */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0f1a]/80 backdrop-blur-xl border-b border-white/10 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-2xl flex items-center justify-center shadow-lg shadow-red-600/20 group-hover:shadow-red-600/40 transition-all duration-300">
              <span className="text-white font-black text-2xl tracking-tighter">
                FT
              </span>
            </div>
            <span className="text-2xl font-bold tracking-tight text-white group-hover:text-red-400 transition-colors">
              {BUSINESS_NAME}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-8 text-sm font-medium">
              <a
                href="#arak"
                className="text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300"
              >
                Áraink
              </a>
              <a
                href="#szolgaltatasok"
                className="text-slate-300 hover:text-white transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300"
              >
                Szolgáltatások
              </a>
              <div className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-4 py-2 rounded-full border border-white/10 transition-all cursor-pointer">
                <Phone className="w-4 h-4 text-red-500" />
                <span className="text-white font-semibold tracking-wide">
                  {BUSINESS_PHONE}
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {}
      {/* Hero Section - Cinematikus vizualitás */}
      <section className="relative pt-32 pb-20 px-6 min-h-[90vh] flex items-center justify-center overflow-hidden">
        {placeholderImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{ transitionProperty: "opacity, transform" }}
          >
            <img
              src={img}
              alt={`Gumiszerviz háttér ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Többrétegű színátmenet a filmes hatásért */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1a]/80 via-transparent to-[#0a0f1a]/40"></div>
          </div>
        ))}

        <div className="relative z-10 max-w-5xl mx-auto text-center w-full mt-20 md:mt-0">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8">
            <span className="flex w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium text-slate-300">
              Hétköznap nyitva • 08:00 - 16:30
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl leading-tight">
            <img
              src="/siteImages/ft-full-logo.png"
              alt="FT Gumiszerviz logó"
              className="mx-auto block h-auto max-w-[720px] w-full"
            />
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 max-w-3xl mx-auto mb-10 drop-shadow-md font-light leading-relaxed">
            Minden egy helyen az autójának! Új gumiabroncsok, futóműszerviz,
            olajcsere és vizsgáztatás Budapest 11. kerületében.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+36204856345"
              className="group flex md:hidden items-center justify-center gap-3 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(220,38,38,0.4)] hover:shadow-[0_0_60px_rgba(220,38,38,0.6)] hover:-translate-y-1"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Azonnali Hívás
            </a>
            <button
              type="button"
              onClick={() => scrollToSection("quick-links")}
              className="group cursor-pointer flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:-translate-y-1"
            >
              <Calendar className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
              Telefonos Időpontfoglalás
            </button>
          </div>
        </div>
      </section>

      {}
      <section id="arak" className="py-24 relative">
        {/* Glow effect behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
              Gumiszerelés & Kerékcsere
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Kérjük, válassza ki a kívánt szolgáltatást és gépjárműve
              keréktárcsa átmérőjét az azonnali árajánlathoz. Nincsenek rejtett
              költségek.
            </p>
          </div>

          {/* Fő Szolgáltatás Kapcsoló (Tire Swap vs Wheel Swap) */}
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex flex-col sm:flex-row bg-[#131a2b] p-1.5 rounded-3xl sm:rounded-[2rem] border border-white/10 w-full max-w-2xl">
              {/* Animált Háttér Pill */}
              <div
                className={`hidden sm:block absolute top-1.5 bottom-1.5 w-[calc(50%-0.375rem)] bg-red-600 rounded-[1.6rem] transition-transform duration-500 ease-in-out shadow-[0_0_20px_rgba(220,38,38,0.4)] ${
                  serviceType === "wheelSwap"
                    ? "translate-x-[calc(100%+0.375rem)]"
                    : "translate-x-0"
                }`}
              ></div>

              <button
                onClick={() => setServiceType("tireSwap")}
                className={`relative cursor-pointer flex-1 flex items-center justify-center gap-3 px-6 py-4 sm:py-5 rounded-[1.6rem] font-bold text-sm sm:text-base transition-all duration-300 outline-none ${
                  serviceType === "tireSwap"
                    ? "text-white bg-red-600 sm:bg-transparent shadow-lg sm:shadow-none mb-2 sm:mb-0"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Settings
                  className={`w-5 h-5 ${serviceType === "tireSwap" ? "animate-[spin_4s_linear_infinite]" : ""}`}
                />
                Gumiszerelés kerékcserével
              </button>

              <button
                onClick={() => setServiceType("wheelSwap")}
                className={`relative cursor-pointer flex-1 flex items-center justify-center gap-3 px-6 py-4 sm:py-5 rounded-[1.6rem] font-bold text-sm sm:text-base transition-all duration-300 outline-none ${
                  serviceType === "wheelSwap"
                    ? "text-white bg-red-600 sm:bg-transparent shadow-lg sm:shadow-none"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Disc className="w-5 h-5" />
                Felnis kerékcsere
              </button>
            </div>
          </div>

          {/* Méretválasztó gombok */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {sizeOrder.map((size) => (
              <button
                key={size}
                onClick={() => setActiveSize(size)}
                className={`relative cursor-pointer px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-red-500 ${
                  activeSize === size
                    ? "bg-slate-100 text-slate-900 shadow-lg scale-105 z-10 border border-slate-100"
                    : "bg-white/5 text-slate-400 hover:bg-white/10 border border-white/5 hover:text-white"
                }`}
              >
                {size}"
              </button>
            ))}
          </div>

          {}
          {/* Konverzióoptimalizált Árazó Kártya */}
          <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-white/10 to-white/5 border border-white/10 backdrop-blur-xl p-8 md:p-12 shadow-2xl transition-all duration-500">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-3xl md:text-4xl font-extrabold text-white">
                    {pricingData[activeSize].title}
                  </h3>
                </div>
                <p className="text-slate-400 text-lg font-light mb-8">
                  {serviceType === "tireSwap"
                    ? "Komplett szolgáltatás csomag, amely magában foglalja az abroncsok leszerelését a felniről, az újak felszerelését és a professzionális centrírozást."
                    : "Gyors és hatékony szolgáltatás, ha már felnire szerelt komplett kerékszettet (pl. téli/nyári garnitúra) kíván cserélni a járművén."}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Dinamikus tartalom renderelés a serviceType alapján */}
                  {serviceFeatures[serviceType].map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="font-medium text-slate-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-auto flex flex-col items-start lg:items-end bg-black/20 p-8 rounded-3xl border border-white/5">
                <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Teljes Ár (
                  {serviceType === "tireSwap" ? "Gumiszerelés" : "Felnis csere"}
                  )
                </div>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400">
                    {pricingData[activeSize][serviceType].price}
                  </span>
                  <span className="text-xl font-medium text-slate-500">
                    {pricingData[activeSize][serviceType].suffix}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => scrollToSection("quick-links")}
                  className="w-full lg:w-auto cursor-pointer bg-red-600 hover:bg-red-500 text-white shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_40px_rgba(220,38,38,0.5)] px-8 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  Időpontot Kérek <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {}
      <section id="szolgaltatasok" className="py-24 px-6 bg-[#060910]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">
                Szolgáltatások
              </h2>
              <p className="text-xl text-slate-400 font-light">
                Gumiszerelés, olajcsere, futóműjavítás és még sok más
                szolgáltatás egy helyen. Nálunk nem csak a gumikat, hanem az
                autó alapszintű egészét is karbantartjuk!
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4 text-slate-400 font-medium">
              <div className="flex flex-col items-end">
                <span className="text-white text-2xl font-bold">4.8/5</span>
                <span className="text-sm flex items-center gap-1">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />{" "}
                  Google Értékelés
                </span>
              </div>
            </div>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
            {additionalServices.map((service) => (
              <div
                key={service.id}
                className={`group relative overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent rounded-[2rem] p-8 border border-white/10 hover:border-red-500/50 transition-all duration-500 ${
                  service.colSpan === 2
                    ? "md:col-span-2 lg:col-span-2"
                    : "col-span-1"
                }`}
              >
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 via-transparent to-red-500/0 group-hover:from-red-500/5 group-hover:to-transparent transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 text-red-500 group-hover:scale-110 group-hover:bg-red-500 group-hover:text-white transition-all duration-500 shadow-lg">
                    <service.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 mb-8 font-light text-lg leading-relaxed flex-grow">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {}
      <footer className="bg-[#04060a] pt-20 pb-10 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-black text-lg">FT</span>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                {BUSINESS_NAME}
              </span>
            </div>
            <p className="text-slate-500 font-light leading-relaxed mb-6">
              Modern technológia, gyors kiszolgálás és szakértelem Budapest
              szívében. Az Ön biztonsága a mi hivatásunk.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase text-sm">
              Kapcsolat
            </h4>
            <div className="space-y-4 text-slate-400 font-light">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 hover:text-white transition-colors"
              >
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <span>{BUSINESS_ADDRESS}</span>
              </a>
              <a
                href={`tel:${BUSINESS_PHONE}`}
                className="flex items-center gap-3 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <span>{BUSINESS_PHONE}</span>
              </a>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">Hétfő - Péntek</div>
                  <div>08:00 - 16:30</div>
                  <div className="mt-1 text-slate-500 text-sm">
                    Hétvégén: Zárva
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div id="quick-links">
            <h4 className="text-white font-bold mb-6 text-lg tracking-wide uppercase text-sm">
              Gyorsmenü
            </h4>
            <ul className="space-y-3 text-slate-400 font-light">
              <li>
                <a
                  href="#arak"
                  className="hover:text-red-400 transition-colors"
                >
                  Árlista & Csomagok
                </a>
              </li>
              <li>
                <a
                  href="#szolgaltatasok"
                  className="hover:text-red-400 transition-colors"
                >
                  Szolgáltatások
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-red-400 transition-colors">
                  Időpontfoglalás
                </a>
              </li>
              <li>
                <Link
                  href="/adatkezelesi-tajekoztato"
                  className="hover:text-red-400 transition-colors"
                >
                  Adatvédelmi tájékoztató
                </Link>
              </li>
              <li>
                <Link
                  href="/impresszum"
                  className="hover:text-red-400 transition-colors"
                >
                  Impresszum
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-600 font-light">
          <div>
            &copy; {new Date().getFullYear()} {BUSINESS_NAME}. Minden jog
            fenntartva.
          </div>
          <div>Készült a 2026-os Next.js architektúra alapelvei szerint.</div>
        </div>
      </footer>

      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
    </div>
  );
}
