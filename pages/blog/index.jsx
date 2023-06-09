import Link from 'next/link';
import Layout from '../../components/Layout';

export default function index({data}) {
  return (
    <Layout>
        <h1>Mis blogs</h1>
        <li>
            <Link href="/blog/primer-blog">
                Primer Blog
            </Link>
        </li>
        <div>
          {
            data.map(({id, title, body}) => (
              <div key={id}>
                <Link className='font-bold text-3xl text-slate-400' href={`/blog/${id}`}>
                  {title}
                </Link>
                <p className='font-thin text-sm'>
                  {body}
                </p>
              </div>
              
            ))
          }
        </div>
    </Layout>
  )
}

// Método para generación de páginas estáticas
export async function getStaticProps(){
  try{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    // Para poder enviar los datos al function principal se envia con un return
    return{
      props: {
        data: data
      }
    }
  }catch(error){
    console.log(error)
  }
}
