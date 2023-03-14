import Layout from '../../components/Layout/layout';
import { getAllPostIds } from "../../Services/postsService";
import { getPostData } from '../../Services/postsService';

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  // get post data
  const postData = await getPostData(params.id);

  // return opbject as props : {};
  return {
    props: {
      postData,
    },
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      {postData.title}
      <br />
      {postData.id}
      <br />
      {postData.date}
      <br />
      <div dangerouslySetInnerHTML={{  __html: postData.contentHTML}} />
    </Layout>
  );
}
