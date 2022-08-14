import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './Navbar'
import Main from './Main'

const Home: NextPage = () => {
  return (
    <div className="relative bg-slate-400">
      <div className="mx-40">
      <Head>
        <title>Random Playlist</title>
        <link rel="icon" href="/logo-dark.png" />
      </Head>
      <Navbar/>
      <Main/>
      </div>
    </div>
  )
}

export default Home
