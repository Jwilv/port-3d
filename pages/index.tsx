import Head from 'next/head'
import {
  About, Contact, Experience,
  Hero, Navbar,
  Tech, Works
} from '../components'

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </>
  )
}
