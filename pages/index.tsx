import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Main from './Main'
import Footer from './Footer'

const Home: NextPage = () => {
  return (
    <div className="relative bg-slate-400 h-[75rem]">
      <div className="mx-40 p-20 h-fit">
      <Head>
        <title>Random Playlist</title>
        <link rel="icon" href="/logo-dark.png" />
      </Head>
      <Navbar/>
      <Main/>
      <Footer/>
      </div>
    </div>
  )
}

export default Home
