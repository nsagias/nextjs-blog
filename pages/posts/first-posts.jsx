import Link from "next/link";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post Head</title>
      </Head>
      <Script 
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnLoad"
        onLoad={()=> console.log(`Scrip loaded correcly. windowFB loaded`)}
      
      />
      <h1>First Post</h1>
      <h2><Link href="/">Home Page</Link></h2>
    </>
  );
}