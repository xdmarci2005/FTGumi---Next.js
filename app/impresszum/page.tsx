import Link from "next/link";
import Footer from "../components/Footer";

export default function Impresszum() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="mb-12">
          <Link
            href="/"
            className="text-[#f22323] hover:text-[#ff5a5a] transition-colors duration-300"
          >
            ← Vissza a gumiszerviz főoldalára
          </Link>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2">Impresszum</h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[#f22323] to-[#ff5a5a] mb-8"></div>

        <div className="space-y-6 text-[#d0d0d0]">
          <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
            <p className="mb-3">
              <span className="text-[#f5f5f5] font-semibold">Cégnév:</span>{" "}
              FT Gumiszerviz Kft.
            </p>
            <p className="mb-3">
              <span className="text-[#f5f5f5] font-semibold">Cím:</span> 1117 Budapest, Kondorosi út 2/A. 
            </p>
            <p className="mb-3">
              <span className="text-[#f5f5f5] font-semibold">Telefon:</span> +36
              20 4856345
            </p>
            <p className="mb-3">
              <span className="text-[#f5f5f5] font-semibold">E-mail:</span>{" "}
              ftgumi@gmail.com
            </p>
            <p>
              <span className="text-[#f5f5f5] font-semibold">Internet:</span>{" "}
              www.ftgumi.hu
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#f5f5f5]">
              Cégbejegyzés és adószám
            </h2>
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a] space-y-3">
              <p>
                <span className="text-[#f5f5f5] font-semibold">
                  A céget bejegyző hatóság:
                </span>{" "}
                Fővárosi Cégbíróság
              </p>
              <p>
                <span className="text-[#f5f5f5] font-semibold">
                  Cégjegyzékszám:
                </span>{" "}
                01-09-736581
              </p>
              <p>
                <span className="text-[#f5f5f5] font-semibold">Adószám:</span>{" "}
                13464886-2-43 
              </p>
              <p>
                <span className="text-[#f5f5f5] font-semibold">Kamara:</span>{" "}
                Budapesti Kereskedelmi és Iparkamara (BKIK)
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mt-8 mb-4 text-[#f5f5f5]">
              Tárhelyszolgáltató
            </h2>
            <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
              <p>
                <span className="text-[#f5f5f5] font-semibold">Név:</span>{" "}
                Amazon Web Services
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
