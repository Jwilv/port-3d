import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css';

import { experiences } from '../constants'
import StarWrapper from './hoc/SectionWrapper'
import { textVariant } from '@/utils/motion';
import Image, { StaticImageData } from 'next/image';

interface ExperienceCardProps {
  icon: string | StaticImageData;
  title: string;
  company_name: string;
  date: string;
  points: string[]
  iconBg: string
}

const ExperienceCard = ({ icon, title, company_name, date, points, iconBg }: ExperienceCardProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ backgroundColor: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={<div className='flex justify-center items-center w-full h-full'>
        <Image
          src={icon}
          alt={company_name}
          className='object-contain'
          style={{ borderRadius: '50%' }}
        />
      </div>}
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >{company_name}</p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {
          points.map((point, index) => (
            <li key={index} className='text-white-100 text-[14px] pl-1 tracking-wider'>{point}</li>
          ))
        }
      </ul>
    </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} >
        <p
          className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
        >introduction</p>
        <h2
          className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]"
        >interview.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} {...experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

const Wrapper = () => {
  return (
    <StarWrapper idName='work'>
      <Experience />
    </StarWrapper>
  )
}

export default Wrapper