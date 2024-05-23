import React, { useState } from 'react';
import DepoimentsImage from '../assets/depoiments.png';
import SliderImage from '../assets/Slider.png';
import CustomerCardTestemonial from '../components/elements/CustomerCardTestemonial';

const comments = [
  { id: 1, username: 'User 1', company: 'Company 1', comment: 'Comentário 1' },
  { id: 2, username: 'User 2', company: 'Company 2', comment: 'Comentário 2' },
  { id: 3, username: 'User 3', company: 'Company 3', comment: 'Comentário 3' },
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
      <CustomerCardTestemonial key={comment.id} comment={comment} />
    ));
  };

  return (
    <div className="w-full flex flex-col items-center justify-center mt-4 sm:mt-6 md:mt-8">
      <div className="w-full relative">

      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
        {renderComments()}
      </div>
    </div>
  );
}
