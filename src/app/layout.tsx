"use client";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ThemeSwitcher from "./components/ThemeSwitcher";

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
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    if (isLight) {
      document.getElementById("root")?.classList.remove("dark");
    } else {
      document.getElementById("root")?.classList.add("dark");
    }
  }, [isLight]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <main id="root" className="flex min-h-screen flex-col items-center">
          <div className="flex min-h-screen min-w-full flex-col items-center justify-between dark:bg-slate-950 bg-slate-50">
            <div className="flex justify-around min-w-full   p-4">
              <Header></Header>
              <ThemeSwitcher
                isLight={isLight}
                changeTheme={() => setIsLight((state) => !state)}
              />
            </div>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
