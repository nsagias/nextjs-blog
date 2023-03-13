import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostData();
  return {
    props: { allPostsData }
  };
}


export default function Home({ allPostsData }) {
  return (
   <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Starter blog</h2>
        <ul className={utilStyles.list}>
          {Array.isArray(allPostsData) && 
            allPostsData.length > 0 && 
            allPostsData.map(({id, data, title}) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {data}
            </li>
          ))}
        </ul>
      </section>
   </Layout>
  );
}
