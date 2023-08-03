import Layout from "@/app/components/Layout";
import "@/app/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Analytics />
    </Layout>
  );
}
