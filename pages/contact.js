import Head from 'next/head';
import Layout from '../components/layoutComponent';

export default function Contact() {
  return (
    <div className="container">
      <Head>
        <title>Manoj Shukla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
            Contact Page
        </Layout>
      </main>

      <style jsx>{`
        
      `}</style>
    </div>
  )
}
