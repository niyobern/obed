import '/styles/output.css'
import Layout from '/components/layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout {...pageProps}>
      <Component {...pageProps}/>
    </Layout>
  )
}
