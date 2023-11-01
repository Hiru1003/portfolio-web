import React from 'react';
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const [ref, InView] = useInView({
    threshold:0.5,
  });
  return <section className='section' id='about' ref={ref}>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center'>
        <div className='flex-1 bg-about bg-contain bg-no-repeat 
        h-[640px] mix-blend-lighten bg-top'>
          
          </div>
        <div className='flex-1 p-20'>
          <h2 className='h2 text-accent'>About me</h2>
          <h3 className='h3 mb-4'>Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. </h3>
          <p
          className='mb-8 max-w-lg mx-auto lg:mx-0'>
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit. Fusce auctor sapien non 
            ultrices lobortis. Nam neque quam, feugiat 
            nec augue quis,  </p>
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {InView ? <CountUp start={0} end={13} duration={3}/> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Years of<br/>
              Experience
              </div>
            </div>

            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {InView ? <CountUp start={0} end={15} duration={3}/> : null }
                k+
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Years of<br/>
              Experience
              </div>
            </div>

            //inview comment
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2' >
                {InView ? <CountUp start={0} end={5} duration={3}/> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
              Years of<br/>
              Experience
              </div>
            </div>

          </div>
        </div>
        <div className='flex gap-x-8 items-center'>
          <button className='btn btn-lg'>
            Contact Me
          </button>
          <a href=""className='text-gradient btn-link'>
            Portfolio
          </a>
        </div>

      </div>
    </div>
  </section>;
};

export default About;
