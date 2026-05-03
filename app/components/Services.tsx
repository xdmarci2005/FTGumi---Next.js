export default function Services() {
    return (<div>
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
    </div>)
    }