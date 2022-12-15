import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';



export default function Home({ allData }) {
  return (
      <Layout home>
        <h1 className='text-center text-bold'>Welcome</h1>
        <p>This is just the begining to build my portfoilio with a backend connected. SQL comes from using wordpress and RESTapi. 
          this is just a larning experince until I am comfortable building a full stack web application. I plan to add blogs, comments sections, project 
          information where you can keep track of where I am at and other things.
        </p>
        <p className='text-warning'>Click anywhere in the menu to view list that are displayed in my SQL database. It is connected to only one RESTapi.</p>
      </Layout>
  );
}
