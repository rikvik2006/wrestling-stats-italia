import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Navbar from "@/components/Navbar/Navbar";
import styles from "./layout.module.scss"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wrestling stats Italia",
  description: "Monitora le statische degli atleti di lotta Greco-Romana, libera e femminile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className={styles.content}>
          {children}
        </div>
      </body>
    </html>
  );
}
