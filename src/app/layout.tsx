import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vapeadores: La verdad que NO quieren que sepas",
  description: "Descubre la verdad oculta sobre los vapeadores, sus efectos en la salud y cómo la industria manipula a los jóvenes.",
  creator: "Vapeadores",
  keywords: ["vapeadores", "vapeo", "cigarro", "salud", "jóvenes"],
  robots: "index, follow",
  openGraph: {
    title: "Vapeadores: La verdad que NO quieren que sepas",
    description: "Descubre la verdad oculta sobre los vapeadores, sus efectos en la salud y cómo la industria manipula a los jóvenes.",
    images: [
      {
        url: "https://example.com/images/vape-danger.jpg",
        width: 800,
        height: 450,
        alt: "Joven exhalando vapor",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
