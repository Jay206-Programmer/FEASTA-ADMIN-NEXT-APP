import '../styles/globals.css'
import '../styles/all.min.css'
import Head from 'next/head' 

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <meta name="description" content="Canteen-Management Website"/>
        <meta name="author" content="FEASTA"/>

        <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet"/>

        <script src="/vendor/jquery/jquery.min.js"></script>
        <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <script src="/vendor/jquery-easing/jquery.easing.min.js"></script>
        <script src="/js/sb-admin-2.min.js"></script>

      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
