import Layout from "@/app/components/Layout";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  return <Layout>Post: {router.query.id}</Layout>;
}
