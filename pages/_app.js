import '../styles/globals.css'
import Layout from '../components/Layout'
import Gtag from "../components/Gtag";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    <Gtag />
    </>
  
  )
}

export default MyApp
