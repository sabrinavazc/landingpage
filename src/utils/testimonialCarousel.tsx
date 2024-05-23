// lógica do carrossel de depoimentos

import React, { useState } from 'react';
import Depoiments from '../assets/depoiments.png';
import Slider from '../assets/Slider.png';
import Image from '../../node_modules/next/image';

const comments = [
  { id: 1, text: 'Comentário 1' },
  { id: 2, text: 'Comentário 2' },
  { id: 3, text: 'Comentário 3' },
  { id: 4, text: 'Comentário 4' },
  { id: 5, text: 'Comentário 5' },
  { id: 6, text: 'Comentário 6' },
  { id: 7, text: 'Comentário 7' },
  { id: 8, text: 'Comentário 8' },
  { id: 9, text: 'Comentário 9' },
];

const itemsPerPage = 3;

export function TestimonialCarousel() {
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(comments.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentPage((prevPage) => (prevPage === totalPages - 1 ? 0 : prevPage + 1));
  };

  const prevSlide = () => {
    setCurrentPage((prevPage) => (prevPage === 0 ? totalPages - 1 : prevPage - 1));
  };

  const renderComments = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const visibleComments = comments.slice(startIndex, endIndex);

    return visibleComments.map((comment) => (
      <div key={comment.id} className="flex justify-center items-center p-4">
        <div className="border border-gray-300 rounded-md p-4">
          <p>{comment.text}</p>
        </div>
      </div>
    ));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8">
      <div className="w-full relative">
        <Image
          src={Depoiments}
          alt="depoiments clients"
          layout="responsive"
          width={471.67}
          height={498.46}
          quality={100}
        />
        <Image
          src={Slider}
          alt="slide"
          layout="constrained"
          onClick={nextSlide}
          className="absolute right-0 top-0 bottom-0 h-full cursor-pointer"
        />
        <Image
          src={Slider}
          alt="slide"
          layout="constrained"
          onClick={prevSlide}
          className="absolute left-0 top-0 bottom-0 h-full cursor-pointer transform rotate-180"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {renderComments()}
      </div>
    </div>
  );
}
