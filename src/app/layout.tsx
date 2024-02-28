import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Traverse",
  description: "Traverse: Your gateway to a privacy- centric browsing experience.Safeguard your data as you explore the web with confidence.Enjoy personalized search results without sacrificing your privacy.Take control of your online journey with Traverse"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
