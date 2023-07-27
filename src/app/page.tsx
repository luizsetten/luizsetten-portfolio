"use client";
import { useEffect, useState } from "react";

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
      <h1 className="text-7xl dark:text-gray-50 text-gray-900">
        Hello 👋, I&apos;m Luiz Setten
      </h1>
      <p className="dark:text-gray-50 text-gray-900">
        🔨 Please be patient, I&apos;m still building this website 🚧
      </p>
    </>
  );
}
