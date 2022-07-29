import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ethiqual | Home</title>
      </Head>
      <div>
        {/* <Navbar /> */}
        <h1 className={styles.title}>Agil/E/thical Home</h1>
        <p className={styles.text}>Id ullamco aliqua labore irure dolor ipsum aute dolore.</p>
        <p className={styles.text}>Et elit ipsum reprehenderit incididunt irure.Consequat velit anim sint nostrud ipsum consectetur non reprehenderit fugiat culpa esse ad voluptate.</p>
        <Link href="/companies">
          <a className={styles.btn}>See all companies</a>
        </Link>
        {/* <Footer /> */}
      </div>
    </>
  )
}
