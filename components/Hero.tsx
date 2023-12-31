import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { githubIcon, linkedinIcon } from '@/assets'

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto `}>
      <div className='sm:px-16 px-6 absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5'>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1
            className='font-black text-white lg:text-[80px] sm:text-[60px] 
             xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white'
          >Hola, soy <span className='text-[#915eff]'>Juan</span></h1>
          <p
            className='text-[#dfd9ff] font-medium lg:text-[30px] 
             sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]
             text-white-100 mt-2'
          >
            Desarrollador Front-End<br className='sm:block hidden' />
          </p>
        </div>
        <div className="linksRef">

          <a
            href='https://github.com/Jwilv'
            target='_blank'
            className="item github"
          >
            <Image src={githubIcon} alt='github' width={50} height={50} />
            <p>Jwilv</p>
          </a>

          <a
            href='https://www.linkedin.com/in/juan-wilvers-450a11233'
            target='_blank'
            className="item  linkedin"
          >
            <Image
              src={linkedinIcon}
              className='linkedin-img'
              alt='github'
              width={50}
              height={50}
            />
            <p>Juan Wilvers</p>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Hero