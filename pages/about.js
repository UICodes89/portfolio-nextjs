import Head from 'next/head';
import Layout from '../components/layoutComponent';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Manoj Shukla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
            About Section
        </Layout>
      </main>

      

      <style jsx>{`
        
      `}</style>

      <style jsx global>{`
        
      `}</style>
    </div>
  )
}
