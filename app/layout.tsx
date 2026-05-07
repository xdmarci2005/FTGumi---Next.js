import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-montserrat",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "FT Gumiszerviz Kft.",
  description: "Minden egy helyen az autójának! Új gumiabroncsok, futóműszerviz, olajcsere.",
  openGraph: {
    title: 'FT Gumiszerviz Kft.',
    description: 'Minden egy helyen az autójának! Új gumiabroncsok, futóműszerviz, olajcsere.',
    url: 'https://www.ftgumi.hu',
    siteName: 'FT Gumiszerviz',
    images: [
      {
        url: 'https://www.ftgumi.hu/siteImages/opengraph-image.png', // Abszolút URL kell!
        width: 1200,
        height: 630,
        alt: 'Előnézeti kép a weboldalhoz',
      },
    ],
    locale: 'hu_HU',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body
        className={`${roboto.variable} ${montserrat.variable} font-sans bg-[#121212] text-[#f5f5f5] antialiased m-0 p-0`}
      >
        {children}
      </body>
    </html>
  );
}