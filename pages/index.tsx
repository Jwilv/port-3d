import Head from 'next/head'
import {
  About, Contact, Experience,
  Feedbacks, Hero, Navbar,
  Tech, Works, Loader,
  Stars, Ball, Computers,
  Earth
} from '../components'

export default function Home() {
  return (
    <>
    <Head>
      <link rel="icon" href="/logo.svg" />
    </Head>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover 
      bg-no-repeat bg-center"
        >
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Stars />
        </div>
      </div>
    </>
  )
}
