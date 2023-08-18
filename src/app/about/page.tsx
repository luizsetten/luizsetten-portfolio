import { differenceInYears } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Luiz Setten - Sobre",
  authors: [{ name: "Luiz Gustavo Chinelato Setten", url: "luizsetten.com" }],
};

export default function About() {
  const age = differenceInYears(new Date(), new Date(1998, 6, 17));

  return (
    <div className="max-w-xl">
      <div className="flex-row flex mt-8">
        <article>
          <h1 className="text-lg font-bold mb-3">About me</h1>
          <p>Hello, my name is Luiz Gustavo Chinelato Setten, {age} years.</p>
          <p>I&apos;m working as Software Developer since 2020.</p>
          <p>
            Graduated in Computer Engineer in 2022 from the Federal Institute of
            South of Minas Gerais
          </p>
        </article>
        <Image
          src="/profile-photo.jpeg"
          width={250}
          height={250}
          objectFit="cover"
          className="rounded-2xl"
          alt="Profile photo of Luiz Setten"
        />
      </div>
    </div>
  );
}
