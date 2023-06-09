import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/Layout';

export default function primerBlog({data}) {
  return (
    <Layout>
        <Head>
            <title>Mi Primer Blog</title>
            <meta name="description" content="Este es mi primer blog" />
        </Head>
        <h1>{data.id} / {data.title}</h1>
        <p>{data.body}</p>        
        <Link href="/blog">
            Volver
        </Link>
    </Layout>
  )
}

export async function getStaticPaths(){
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    const paths = data.map(({id}) => ({params: {id: `${id}`}})) // Toma todos los id y lo convierte a string
    return {
      paths,
      fallback: false
    }
  }catch(error){
    console.log(error)
  }
}

export async function getStaticProps({params}){
  try{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const data = await res.json()
    return {
      props: {
        data
      }
    }
  }catch(error){
    console.log(error)
  }
}
