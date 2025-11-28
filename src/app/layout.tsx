import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import FloatingContact from "@/components/Layout/FloatingContact";
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
  title: "Uzman Elektrik | Profesyonel Elektrik Tesisat ve Tamir Hizmetleri",
  description: "Profesyonel elektrikçi hizmetleri. Elektrik tesisat, pano tamiri, avize montajı, uydu ayarı ve daha fazlası. 7/24 hizmet: 0537 515 42 25",
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 300px)' }}>
          {children}
        </main>
        <FloatingContact />
        <Footer />
      </body>
    </html>
  );
}
