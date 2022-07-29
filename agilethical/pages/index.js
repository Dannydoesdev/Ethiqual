import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Agil/E/thical Home</h1>
      <Link href="/companies">
        <a>See all companies</a>
      </Link>
      <Footer />
  </div>
  )
}
