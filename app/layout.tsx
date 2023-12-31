import Header from "@/components/header";
import Footer from "@/components/footer";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Elgevibes Philippines | Fashion E-Commerce Website  ",
  description: "Generated by create next app",
  openGraph: {
    images:
      "https://raw.githubusercontent.com/meraeugene/fashion-ecommerce/main/public/images/preview.png",
  },
  icons: {
    icon: "/images/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#fff" />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
