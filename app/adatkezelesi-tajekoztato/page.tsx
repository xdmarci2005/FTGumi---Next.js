import Link from "next/link";
import Footer from "../components/Footer";

export default function Adatkezelesi() {
  return (
    <main className="min-h-screen bg-[#121212] text-[#f5f5f5]">
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <Link
            href="/"
            className=" hover:text-[#f22323] transition-colors duration-300"
          >
            ← Vissza a gumiszerviz főoldalára
          </Link>
          <a
            href="/pdfs/FT Gumiszerviz GDPR nyilatkozat.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f22323] hover:bg-[F37777] text-[#121212] px-4 py-2 rounded-lg font-semibold transition-colors duration-300"
          >
            PDF letöltése
          </a>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Adatkezelési tájékoztató
        </h1>
        <div className="h-1 w-20 bg-gradient-to-r from-[#f22323] to-[] mb-4"></div>
        <p className="text-[#8a8a8a] text-sm mb-12">
          Frissítve: 2026. 05. 04.
        </p>

        <div className="space-y-8 text-[#d0d0d0]">
          <section className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold mb-4 text-[#f5f5f5]">
              1. Adatkezelő
            </h2>
            <p className="mb-4">
              A www.ftgumi.hu webhelyet a{" "}
              <span className="text-[#f5f5f5] font-semibold">
                FT Gumiszerviz Kft.
              </span>{" "}
              üzemelteti.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Cégjegyzékszám: 01 09 736581</li>
              <li>Adószám: 13464886243</li>
              <li>Székhely és Postacím: 1117 Budapest, Kondorosi út 2/A. </li>
              <li>Telefon: +36 20 4856345</li>
              <li>E-mail cím: ftgumi@gmail.com</li>
            </ul>
            <p>
              <span className="text-[#f5f5f5] font-semibold">
                Adatvédelmi tisztviselő:
              </span>{" "}
              Figura Ferenc
            </p>
          </section>

          <section className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold mb-4 text-[#f5f5f5]">
              2. Az adatkezelésre vonatkozó jogszabályok, a tájékoztató hatálya
            </h2>
            <p className="mb-4">
              Adatkezelő a Felhasználók adatait elsősorban az Európai Unió
              Általános Adatvédelmi Rendelete (GDPR), a 2011. évi CXII. törvény
              (Infotv.), valamint az egyéb vonatkozó jogszabályok rendelkezései
              alapján kezeli.
            </p>
            <p>
              Jelen tájékoztató értelmében Felhasználó: a webhelyet böngésző, a
              webhely szolgáltatásait használó, valamint Adatkezelőtől
              szolgáltatást megrendelő természetes személyek.
            </p>
          </section>

          <section className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
            <h2 className="text-2xl font-bold mb-4 text-[#f5f5f5]">
              3. Információtechnológiai szolgáltatás működéséhez kapcsolódó
              adatkezelés
            </h2>
            <p>
              Adatkezelő a webhely üzemeltetéséhez és a weboldal látogatóira
              vonatkozó technikai adatok gyűjtéséhez sütiket alkalmaz.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  );
}
