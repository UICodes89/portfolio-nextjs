import Head from 'next/head';
import Layout from '../components/layoutComponent';

export default function Blog() {
  return (
    <div className="container">
      <Head>
        <title>Manoj Shukla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
            Blog Section
        </Layout>
      </main>

      <style jsx>{`
        
      `}</style>
    </div>
  )
}
