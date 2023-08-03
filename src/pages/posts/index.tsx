import Layout from "@/app/components/Layout";

export interface IPost {
  id: string;
  title: string;
  descirption: string;
  date: Date;
}

export default function Posts() {
  const listaPosts: IPost[] = [
    {
      id: "1",
      title: "Seção ainda não implementada",
      descirption: "Usar lib MDx",
      date: new Date(),
    },
  ];
  return (
    <div>
      {listaPosts.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
