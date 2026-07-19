import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import CursorSpotlight from "@/components/CursorSpotlight";
import BackToTop from "@/components/BackToTop";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://bilalbasharat.dev"),
  title: "Bilal Basharat — Full Stack Developer (React.js & Laravel)",
  description:
    "Full stack developer in Lahore building SaaS products with Laravel, React.js and Next.js. Shipped a restaurant kiosk platform running in 15 restaurants.",
  openGraph: {
    title: "Bilal Basharat — Full Stack Developer",
    description:
      "SaaS products with Laravel, React.js and Next.js. Shipped a kiosk platform running in 15 restaurants.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} ${jetbrainsMono.variable}`}
      >
         <CursorSpotlight />
        {children}
         <BackToTop />
      </body>
    </html>
  );
}
