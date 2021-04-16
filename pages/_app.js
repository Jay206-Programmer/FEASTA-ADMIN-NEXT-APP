import '../styles/globals.css'
import Head from 'next/head' 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        
        <script src="/vendor/jquery/jquery.min.js"/>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"/>
        <script src="/vendor/jquery-easing/jquery.easing.min.js"/>
        <script src="/js/sb-admin-2.min.js"/>

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
