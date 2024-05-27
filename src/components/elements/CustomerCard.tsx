import React from 'react';

import Image, { StaticImageData } from '../../../node_modules/next/image';
import Uote from '../../assets/uote.png';
import { motion } from 'framer-motion';
import BlueQuote from '../../assets/bluequote.png';


export interface CommentProps {
  comments: string;
  usernamecompany: string;
  position: string;
}

export const CustomerCommentCard = ({
  comments,
  usernamecompany,
  position,
  isFirst,
}: CommentProps & { isFirst: boolean }) => {
  return (
    <motion.div
      className={`rounded-[10px]  h-auto lg:h-[498.46px] mt-[40px] mb-8 w-full lg:w-[471.67px] flex flex-col justify-between 
        ${isFirst ? 'bg-jogga-white text-jogga-text-blue-testimonial shadow-lg' : 'bg-jogga-light-blue shadow-md'}`}
      whileHover={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
    >
    <div className='mx-10 mt-[32px]'>
      <div className="flex items-start lg:mb-[32px] p-4">
        <Image 
          src={isFirst ? BlueQuote : Uote}
          alt="quote" 
          width={86} 
          height={61.46}
        />
      </div>
      <div className="flex-grow flex flex-col mt-[16px] lg:mt-[32px] justify-start text-center lg:text-left p-4">
        <p className={`lg:text-[18px] ${isFirst ? 'text-jogga-text-blue-testimonial' : 'text-jogga-white'}`}>
          {comments}
        </p>
      </div>
      <div className="flex flex-col items-end mt-[40px] lg:mt-[80px] p-4">
        <div className={`text-jogga-blue text-[20px] font-semibold lg:text-[24px]`}>
          <h1>
            {usernamecompany}
          </h1>
        </div>
        <p className={`text-[14px] lg:text-[16px] ${isFirst ? 'text-jogga-text-blue-testimonial' : 'text-jogga-white'}`}>
          {position}
        </p>
      </div>
      </div>  
    </motion.div>
  );
};