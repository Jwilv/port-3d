import {
  About, Contact, Experience,
  Feedbacks, Hero, Navbar,
  Tech, Works, Loader,
  Stars, Ball, Computers,
  Earth
} from '../components'

export default function Home() {
  return (
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
  )
}
