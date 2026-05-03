"use client";
import Image from "next/image";


export default function Header() {
    return (<div>
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
    </div>
    )
}