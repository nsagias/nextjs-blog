import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Layout, { siteTitle } from '../components/layout';

export default function Home() {
  return (
   <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
   </Layout>
  );
}
