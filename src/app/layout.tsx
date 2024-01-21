import type { Metadata } from "next";
import { Mulish, Philosopher } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

const mulish = Mulish({ subsets: ["latin"] });
// const philosopher = Philosopher({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shehjad Mobin",
  description: "Shehjad Mobin's personal website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ${philosopher.className}
  return (
    <html lang="en">
      <body
        className={`
      ${mulish.className}
       `}
      >
        <Navbar />
        <main className="min-h-screen my-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
