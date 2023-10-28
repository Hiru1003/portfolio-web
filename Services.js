import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';
import { InView, useInView } from 'react-intersection-observer';


const Services = () => {
  return <section className='section' id='services'>
  <div className='container mx-auto'>
    <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center'>
      
        
      <div className='flex-1 p-20'>
        <h2 className='h2 text-accent'>About me</h2>
        <h3 className='h3 mb-4'>Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. </h3>
        <p
        className='mb-8 max-w-lg mx-auto lg:mx-0'>
          Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Fusce auctor sapien non 
          ultrices lobortis. Nam neque quam, feugiat 
          nec augue quis,Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Fusce auctor sapien non 
          ultrices lobortis. Nam neque quam, feugiat 
          nec augue quis, Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit. Fusce auctor sapien non 
          ultrices lobortis. Nam neque quam, feugiat 
          nec augue quis,   </p>
        
      </div>
      <div className='flex-1 bg-services bg-contain bg-no-repeat 
      h-[640px] mix-blend-lighten bg-top'>
        
        </div>
      

    </div>
  </div>
</section>;
};

export default Services;
