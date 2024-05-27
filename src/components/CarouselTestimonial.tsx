'use client'

import React from 'react';
import { CustomerCommentCard, CommentProps } from './elements/CustomerCard';
import { motion } from "framer-motion";


interface CarouselProps {
    comments: CommentProps[];
}

export const CarouselTestemonials = ({ comments
  }: CarouselProps) => {
    return (
      <div className="overflow-x-auto w-full py-8">
        <motion.div
          className="flex space-x-4 lg:space-x-10 items-center w-full"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {comments.map((testimonial, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full sm:w-80 lg:w-[30%] mt-[40px] rounded-[10px] mx-4"
            >
              <CustomerCommentCard
                comments={testimonial.comments}
                usernamecompany={testimonial.usernamecompany}
                position={testimonial.position}
                isFirst={index === 0}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    );
  };