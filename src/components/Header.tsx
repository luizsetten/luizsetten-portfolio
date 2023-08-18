import Link from "next/link";

export interface ILink {
  link: string;
  title: string;
}

export default function Header() {
  const links: ILink[] = [
    {
      link: "/",
      title: "Home",
    },
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/posts",
      title: "Posts",
    },
    {
      link: "/projects",
      title: "Projects",
    },
  ];
  return (
    <div className="flex dark:text-gray-50 text-gray-950">
      {links.map(({ link, title }) => (
        <Link href={link} key={link} className="mr-2">
          {title}
        </Link>
      ))}
    </div>
  );
}
