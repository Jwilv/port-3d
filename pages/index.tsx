import Head from 'next/head'
import { About, Hero, Presentation, Proyects } from '@/components/screens'
import { Experience } from '@/components/screens/Experience'
import { Contact } from '@/components/screens/Contact'
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/logo.jpeg" />
        <title>Juan Wilvers</title>
        <meta
          name="description"
          content="Portfolio of Juan Wilvers"
        />
      </Head>
      <main className="h-screen w-screen overflow-x-hidden">
      <Presentation />
        <About />
        <Hero />
        <Proyects />
        <Experience />
        <Contact />
      </main>
    </>
  )
}
