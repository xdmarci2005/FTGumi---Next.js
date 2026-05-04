import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-t border-[#3a3a3a]">
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* Brands Section */}
        <div className="mb-12 pb-8 border-b border-[#2a2a2a]">
          <p className="text-[#7a7a7a] text-xs uppercase tracking-[3px] mb-4">
            Partnereink
          </p>
          <div className="flex justify-center gap-8 md:gap-12 flex-wrap">
            <span className="text-[#e0e0e0] font-bold text-sm md:text-base hover:text-white transition-colors duration-300">
              HANKOOK
            </span>
            <span className="text-[#7a7a7a]">•</span>
            <span className="text-[#e0e0e0] font-bold text-sm md:text-base hover:text-white transition-colors duration-300">
              FIRESTONE
            </span>
            <span className="text-[#7a7a7a]">•</span>
            <span className="text-[#e0e0e0] font-bold text-sm md:text-base hover:text-white transition-colors duration-300">
              BRIDGESTONE
            </span>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mb-8 pb-8 border-b border-[#2a2a2a]">
          <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
            <Link
              href="/adatkezelesi-tajekoztato"
              className="text-[#a0a0a0] text-xs md:text-sm hover:text-white transition-colors duration-300"
            >
              Adatkezelési tájékoztató
            </Link>
            <span className="text-[#3a3a3a]">|</span>
            <Link
              href="/impresszum"
              className="text-[#a0a0a0] text-xs md:text-sm hover:text-white transition-colors duration-300"
            >
              Impresszum
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#7a7a7a] text-xs md:text-sm">
            © 2013 - 2026 <span className="text-[#5a5a5a]">•</span> FT
            Gumiszerviz Kft.
          </p>
          <p className="text-[#5a5a5a] text-xs mt-2">Minden jog fenntartva.</p>
        </div>
      </div>
    </footer>
  );
}
