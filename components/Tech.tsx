import React from "react";

import StarWrapper from "./hoc/SectionWrapper";
import { technologies } from "../constants";
import Image from "next/image";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          <Image
            src={technology.icon}
            alt={technology.name}
            className='w-full h-full object-contain'
          />
        </div>
      ))}
    </div>
  );
};

const Wrapper = () => {
  return (
    <StarWrapper idName='tech'>
      <Tech />
    </StarWrapper>
  );
}

export default Wrapper