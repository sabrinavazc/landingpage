import React from 'react';
import Image from '../../../node_modules/next/image';
import Quote from '../../public/images/quote.png';

interface Comment {
  username: string;
  company: string;
  comment: string;
}

interface CustomerCommentCardProps {
  comment: Comment;
}

const CustomerCommentCard: React.FC<CustomerCommentCardProps> = ({ comment }) => {
  return (
    <div className="bg-jogga-light-blue rounded-lg p-4 flex">
        <div>
            <Image
            src={Quote}
            alt="quote"
            width={86}
            height={61.46}
        />
        </div>
        <div className="flex-grow">
            <p className="text-white text-18">{comment.comment}</p>
            <div className="flex justify-end mt-4">
            <div className="text-jogga-blue text-24">
                <h1>{comment.username}</h1>
          </div>
        </div>
            <p className="text-jogga-white text-16">{comment.company}</p>
      </div>
    </div>
  );
};

export default CustomerCommentCard;
