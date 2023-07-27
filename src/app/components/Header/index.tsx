import Link from "next/link";

export default function Header() {
  return (
    <div className="flex">
      <Link href="/">Início</Link>
      <Link href="/about">Sobre</Link>
    </div>
  );
}
