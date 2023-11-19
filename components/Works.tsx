import { motion } from "framer-motion";
import { github } from "../assets";
import StarWrapper from "./hoc/SectionWrapper";
import { projects } from "../constants";
import Image, { StaticImageData } from "next/image";

interface ProjectCardProps {
  index: number;
  name: string;
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string | StaticImageData;
  source_code_link: string;
}

export const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}: ProjectCardProps) => {
  return (
    <motion.div
      style={{ cursor: 'pointer' }}
    >
      <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className='relative w-full h-[230px]'>
          <Image
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <Image
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div>
        <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>Explora Mi Trabajo</p>
        <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Proyectos Destacados</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          A continuación, encontrarás una selección de mis proyectos más destacados,
          cada uno de ellos refleja mi pasión por el desarrollo y la programación.
          Descubre cómo he aplicado mis habilidades en React, Next, Node y Express para crear soluciones innovadoras y eficientes.
        </motion.p>
      </div>


      <div className='mt-20 flex flex-wrap gap-7 justify-center'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

const Wrapper = () => {
  return (
    <StarWrapper idName='work'>
      <Works />
    </StarWrapper>
  );
}

export default Wrapper