import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>FEASTA</title>
      </Head>
      <div>
        <div className='container-fluid d-flex align-items-center justify-content-around' style={{height: '100vh'}}>
          <Link href = '/dashboard'>
            <button className='btn btn-dark'>To Dashboard</button>
          </Link>
          <Link href = '/login'>
            <button className='btn btn-dark'>To login</button>
          </Link>
        </div>
      </div>
    </>
  )
}
