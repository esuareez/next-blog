import Head from "next/head"
import styles from "../styles/Layout.module.css"
import Image from "next/image"
import Link from "next/link"

export default function Layout({children, title, description, about}) {
  console.log(about)
  return (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            <meta name="description" content={description} />
        </Head>
        { about ? (
        <header class="bg-white">
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div class="flex lg:flex-1">
              <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Your Company</span>
              
              </a>
            </div>
            <div class="hidden lg:flex lg:gap-x-12">
              <Link href="/" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-400 duration-500">Home</Link>
              <Link href="/about" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-400 duration-500">About</Link>
              <Link href="/blog" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-400 duration-500">Blog</Link>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
              <a href="#" class="text-sm font-semibold leading-6 text-gray-900 hover:text-orange-400 duration-500">Log in <span aria-hidden="true">&rarr;</span></a>
            </div>
          </nav>
        </header> ) : (
          <header className={styles.header}>
              <nav>navbar</nav>
          </header>
        )}
        <main>{children}</main>
        <footer>footer</footer>
    </div>
  )
}

Layout.defaultProps = {
    title: "Pagina Test",
    description: "Esta es la descripcion de mi pagina del test"
}
