import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllIds, getData } from '../../lib/data';
import Link from 'next/link';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    },
    revalidate: 60 // set this to seconds before ISR invoked
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Blogs({ itemData }) {
  

  return (
    <Layout>
    <div className="row text-center">
      <h1>{itemData.post_title}</h1>
      <p>{itemData.blog_name}</p>
    
  
    

  </div>
    
  </Layout>
  );
}