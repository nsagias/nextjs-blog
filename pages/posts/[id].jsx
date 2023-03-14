import Layout from '../../components/layout';
import { getAllPostIds } from "../../Services/posts";
import { getPostData } from '../../Services/postsServices';

export async function getStaticPaths() {
  const path = getAllPostIds();
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
      <div dangerouslySetInnerHTML={{  __: postData.contentHTML}} />
    </Layout>
  );
}
