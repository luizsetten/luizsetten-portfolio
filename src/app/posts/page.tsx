import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import Link from "next/link";

export default function Posts() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="w-2/3">
      {posts.map((post) => (
        <Link key={post._id} href={post.url} legacyBehavior>
          <div className="cursor-pointer p-10 mb-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
            <strong className="text-2xl">{post.title}</strong>
            <p>{post.body.raw.split("", 250)}...</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
