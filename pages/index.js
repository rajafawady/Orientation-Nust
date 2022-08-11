import Layout from "../components/Layout";
import Head from "next/dist/shared/lib/head";
import Wordle from "../components/Wordle";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="css/style.css" />
      </Head>
      <Layout isIndex={true}>
      <Wordle/>
      </Layout>
    </>
  );
}
