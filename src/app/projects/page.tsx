import Image, { StaticImageData } from "next/image";
import img from "./portfolio.jpeg";

export interface IProject {
  name: string;
  image: StaticImageData;
  description: string;
  link?: string;
}

const Project = ({ description, image, name, link }: IProject) => (
  <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-2xl max-w-xl">
    <Image
      width={550}
      height={100}
      src={image}
      alt={"Imagem do projeto " + name}
      className="mb-3"
    ></Image>
    <h3 className="text-2xl">{name}</h3>
    <p>{description}</p>
  </div>
);

const Projects = () => {
  const projectsList: IProject[] = [
    {
      description:
        "Este é meu próprio site portfolio, que apresenta algumas informações sobre a minha pessoa, meus conhecimentos, alguns posts e uma listagem dos projetos que eu fiz em meu tempo livre.",
      image: img,
      name: "Luiz Setten Portfolio",
    },
  ];

  return (
    <div>
      {projectsList.map((item) => (
        <Project
          key={item.name}
          name={item.name}
          description={item.description}
          image={item.image}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default Projects;
