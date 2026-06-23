import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mac-O-Roni | Mac & Cheese Food Truck - Tucson AZ",
  description:
    "Cheesy. Loaded. Legendary. Tucson's favorite mac and cheese food truck. Gourmet loaded mac, catering, and good vibes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="font-[family-name:var(--font-nunito)] bg-[#FFFBEB] text-[#1C1917]">
        {children}
      </body>
    </html>
  );
}
