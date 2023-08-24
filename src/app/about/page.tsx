import { differenceInYears } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Luiz Setten - About",
  authors: [{ name: "Luiz Gustavo Chinelato Setten", url: "luizsetten.com" }],
  keywords: [
    "software developer",
    "reactjs",
    "angular",
    "typescript",
    "javascript",
    "nodejs",
    "react native",
    "styled-components",
    "angular",
    "jest",
    "jasmine",
    "ibm",
  ],
};

export default function About() {
  const age = differenceInYears(new Date(), new Date(1998, 6, 17));

  const experiences = [
    {
      title: "Software developer - IBM",
      duration: "nov 2021 - Present",
      description: `Banco do Brasil platform’s. Applied knowledge of Angular, Typescript, Jasmine,
      Java, Quarkus, JPA, Scrum and Kanban. Create new applications and give
      maintenance to applications that already exist.`,
    },
    {
      title: "Software developer - Fbenevides",
      duration: "jun 2021 - nov 2021",
      description: `Bradesco Cards App. Applied knowledge of ReactJS, Jest, Scrum and Kanban.
      Maintain and improve functionalities of the application.`,
    },
    {
      title: "Software developer - Fbenevides",
      duration: "oct 2020 - jun 2021",
      description: `Applied knowledge of ReactJS, React Native, Postgres, NodeJS, AWS stack, JIRA, Bitbucket. 
      Language platform: Maintain and improve application, creation of mobile app, integration with payment method. 
      ERP middleware: Integration with a routine that automates some tasks based on a cronjob. 
      Shoes Store: Create an e-commerce of shoes.`,
    },
  ];

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
      <div className="mt-5">
        <h1 className="text-2xl font-bold mb-5">Experience</h1>

        {experiences.map((exp, index) => (
          <div key={index} className="mb-4">
            <h2 className="text-xl font-semibold">{exp.title}</h2>
            <p className="text-xs mb-2">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
