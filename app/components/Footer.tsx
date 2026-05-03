export default function Footer() {
    return <div className="">
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
}