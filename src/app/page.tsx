"use client";
import { useEffect, useState } from "react";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function Home() {
  const [isLight, setIsLight] = useState(true);

  useEffect(() => {
    if (isLight) {
      document.getElementById("root")?.classList.remove("dark");
    } else {
      document.getElementById("root")?.classList.add("dark");
    }
  }, [isLight]);

  return (
    <>
      <main id="root" className="flex min-h-screen flex-col items-center">
        <div className="flex min-h-screen min-w-full flex-col items-center justify-between dark:bg-slate-950 bg-slate-50">
          <div className="flex min-w-full  justify-end p-4">
            <ThemeSwitcher
              isLight={isLight}
              changeTheme={() => setIsLight((state) => !state)}
            />
          </div>

          <h1 className="text-7xl dark:text-gray-50 text-gray-900">
            Hello 👋, I&apos;m Luiz Setten
          </h1>
          <p className="dark:text-gray-50 text-gray-900">
            🔨 Please be patient, I&apos;m still building this website 🚧
          </p>
        </div>
      </main>
    </>
  );
}
