import Link from "next/link";

export default function Header() {
  return (
    <div className="flex dark:text-gray-50 text-gray-950">
      <Link href="/" className="mr-2">
        Início
      </Link>
      <Link href="/about">Sobre</Link>
    </div>
  );
}
