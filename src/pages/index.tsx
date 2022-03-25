import Head from 'next/head'
import Register from './Register'
import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.bg}>
      <Head>
        <title>EloGroup - Leads</title>
      </Head>
      <Register />
    </div>
  )
}