'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';
import AppleImage from '../assets/Apple.png';
import GoogleImage from '../assets/Google.png';
import SlackImage from '../assets/Slack.png';
import MicrosoftImage from '../assets/Microsoft.png';

export function SponsorsElements() {
  return (
    <div className="overflow-x-auto items-center py-[32px] mx-0">
      <motion.div
        className="flex justify-around items-center w-full sm:w-auto"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%' }} // Adiciona esta linha para definir a largura como 100%
      >
        <Image
          src={AppleImage} 
          alt="Apple" 
          width={55.47} 
          height={68} 
          className="cursor-pointer hover:opacity-80 my-2 sm:my-0"
        />
                <Image
          src={MicrosoftImage} 
          alt="Microsoft" 
          width={287} 
          height={62} 
          className="cursor-pointer hover:opacity-80 my-2 sm:my-0"
        />
        <Image
          src={SlackImage}
          alt="Slack" 
          width={280} 
          height={71} 
          className="cursor-pointer hover:opacity-80 my-2 sm:my-0"
        />
        <Image
          src={GoogleImage} 
          alt="Google" 
          width={211} 
          height={69.81} 
          className="cursor-pointer hover:opacity-80 my-2 sm:my-0"
        />
      </motion.div>
    </div>  
  );
};
