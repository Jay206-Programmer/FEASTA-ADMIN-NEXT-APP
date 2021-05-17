import '../styles/globals.css'
import '../styles/all.min.css'

//* Library Imports
import { useEffect } from 'react'

//* Next Imports
import Head from 'next/head' 
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  useEffect(() => {
    
    //? Getting Login Status
    var locallog = localStorage.getItem("login")?JSON.parse(localStorage.getItem("login")):{login:false};
    
    if(locallog.login){
      //? Login Done
      router.push('/dashboard')
    }
    else{
      //? Login Not Done
      router.push('/login')
    }
  }, [])

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
        <link rel="icon" href="/favicon.ico" />

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
