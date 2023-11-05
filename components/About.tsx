
import { motion } from 'framer-motion'
import { services } from "../constants"
import { fadeIn, textVariant } from '../utils/motion'
import Image, { StaticImageData } from 'next/image'

interface ServiceCardProps {
  index: number
  title: string
  icon: string | StaticImageData
}

export const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <div className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('rigth', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <Image src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </div>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
        >introduction</p>
        <h2
          className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >interview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam iure rem asperiores repellendus quo rerum facere.
        Magnam molestias numquam suscipit iste similique illum corporis eveniet culpa. Sit hic corrupti magnam?
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default About