import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Template from "@/components/Template";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luiz Setten",
  description: "Hello, welcome to my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Template>{children}</Template>
      </body>
    </html>
  );
}
