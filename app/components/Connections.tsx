export default function Connections() {
    return <div className="">
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
    </div>
}