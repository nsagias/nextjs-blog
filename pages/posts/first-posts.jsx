import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post Head</title>
      </Head>
      <h1>First Post</h1>
      <h2><Link href="/">Home Page</Link></h2>
    </>
  );
}