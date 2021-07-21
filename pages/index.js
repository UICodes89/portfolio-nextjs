import Head from 'next/head';
import Layout from '../components/layoutComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import Typewriter from 'typewriter-effect';
import TechLogo from  "../components/logoComponent";

export default function Home() {
  const tech = [
      {'name':'HTML', path:'/images/html.png'},
      {'name':'Vue', path:'/images/vue.png'},
      {'name':'Angular', path:'/images/angular.png'},
      {'name':'Node', path:'/images/node.png'},
      {'name':'GO', path:'/images/go.png'},
      {'name':'Scipy', path:'/images/scipy.png'},
      {'name':'Tensorflow', path:'/images/tensorflow.png'},
      {'name':'Webpack', path:'/images/webpack.png'},
      {'name':'JavaScript', path:'/images/js.png'},
      {'name':'CSS', path:'/images/css.png'},
      {'name':'SCSS', path:'/images/scss.png'},
      {'name':'React', path:'/images/react.png'},
      {'name':'AWS', path:'/images/aws.png'},
      {'name':'nextjs', path:'/images/next.png'},
      {'name':'Express', path:'/images/express.png'},
      {'name':'Flask', path:'/images/flask.png'},
      {'name':'Mongo', path:'/images/mongo.png'},
      {'name':'Postgres', path:'/images/postgres.png'},
      {'name':'Serverless', path:'/images/serverless.png'},
      {'name':'Docker', path:'/images/docker.png'},
    ]
  return (
    <div className="container">
      <Head>
        <title>Manoj Shukla</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Layout>
            <div className="col-12">
              <div className="row">
                  <h1 className="title">
                    <Typewriter 
                    onInit={() => {}}
                    options={{
                          strings: ['A Full Stack Data Science Developer'],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                  </h1>
              </div>
              <div className="row">
                <p>
                Hello, This is Manoj Shukla. I am a Fullstack Data Science 
                Developer. I have done my Bachelor's from <a href="https://kiit.ac.in/" target="_blank">KIIT University</a>,
                 Bhubaneswar Odisha, and my master's from National College
                  of Ireland  <a href="https://www.ncirl.ie/" target="_blank">(NCI)</a> Dublin, Ireland.<a href="/about">read more</a>
                </p>
              </div>
              <div className="row">
                <div className="tech text-center">
                      {
                        tech.map(item => (
                          <TechLogo path={item.path} title = {item.name} key={item.path}/>
                        ))
                      }
                </div>
              </div>
            </div>
        </Layout>
      </main>

      

      <style jsx>{`
        .title{
            font-size: 70px;
            line-height: 1.1;
            -webkit-letter-spacing: -0.07em;
            -moz-letter-spacing: -0.07em;
            -ms-letter-spacing: -0.07em;
            letter-spacing: -0.07em;
            margin: 0px 0px 30px;
            font-family: sans-serif;
            font-weight: 800;
            text-align: center;
            height: 183px;
            width: 670px;
            margin: 0 auto;
            color:#0b91e2;
        }
        p{
          font-size: 18px;
          font-family: sans-serif;
          color: #000;
          text-align:center;
          margin:30px 0;
        }
        a{
          coor:#0b91e2;
          text-decoration:none;
          cursor:pointer;
        }
        a:hover{
          coor:#0b91e2;
          text-decoration:none;
        }
      
      `}</style>

      <style jsx global>{`
        
      `}</style>
    </div>
  )
}
