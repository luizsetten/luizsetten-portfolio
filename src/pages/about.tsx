import Layout from "@/app/components/Layout";
import { differenceInYears } from "date-fns";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Luiz Setten - Sobre",
};

export default function About() {
  const age = differenceInYears(new Date(), new Date(1998, 6, 17));
  return (
    <>
      <h1>Sobre mim</h1>
      <p className="mx-auto">
        Olá, sou Luiz Gustavo Chinelato Setten, tenho {age} anos, atuo como
        desenvolvedor desde 2020, possuo graduação em Engenharia da Computação
        pelo IFSULDEMINAS - Campus Poços de caldas
      </p>
    </>
  );
}
