import Head from 'next/head'
import Register from './Register'
import Board from './Board'
import styles from './home.module.scss'
import Lead from './Lead'

export default function Home() {
  return (
    <div className={styles.bg}>
      <Head>
        <title>EloGroup - Leads</title>
      </Head>
      {/* <Register /> */}
      <Board />
      {/* <Lead /> */}
    </div>
  )
}