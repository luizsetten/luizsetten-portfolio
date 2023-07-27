"use client";
import { useEffect, useState } from "react";
import Header from "../Header";

import ThemeSwitcher from "../ThemeSwitcher";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    if (isLight) {
      document.getElementById("root")?.classList.remove("dark");
    } else {
      document.getElementById("root")?.classList.add("dark");
    }
  }, [isLight]);

  return (
    <main
      id="root"
      className={"flex min-h-screen flex-col items-cente " + inter.className}
    >
      <div className="flex min-h-screen min-w-full flex-col items-center dark:bg-slate-950 bg-slate-50">
        <div className="flex justify-around min-w-full p-4">
          <Header />
          <ThemeSwitcher
            isLight={isLight}
            changeTheme={() => setIsLight((state) => !state)}
          />
        </div>
        {children}
      </div>
    </main>
  );
};

export default Layout;