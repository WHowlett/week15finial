import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import { getSortedList } from '../../lib/data';


export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    },
    revalidate: 60
  }
}
export default function Blog({ allData }) {
  return (
      <Layout home>
        <h1>List of Names</h1>
        <div className="list-group">
          {allData.map(({ id, name }) => (
            <Link key={id} href={`/blogs/${id}`}>
              <p className="list-group-item list-group-item-action">{name}</p>
            </Link>
          ))}
        </div>
      </Layout>
  );
}
