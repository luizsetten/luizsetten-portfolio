import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col flex-grow align-middle justify-center text-center">
      <div className="p-4 rounded-xl">
        <h1 className="text-7xl mb-36 flex">
          <div className="shake max-sm:hidden">
            <div className="shake">👋</div>
          </div>
          Hello, I&apos;m Luiz Setten
        </h1>
        <p>🔨 Please be patient, I&apos;m still building this website 🚧</p>
      </div>
    </div>
  );
}
