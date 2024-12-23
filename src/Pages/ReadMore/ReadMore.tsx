import React, { useState } from "react";

interface ReadMoreProps {
  text: string;
  maxLength: number;
}

const ReadMore: React.FC<ReadMoreProps> = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <div className="text-dark-gray-60">
      <p className="inline">
        {isExpanded ? text : `${text.slice(0, maxLength)}...`}
      </p>
      <button
        onClick={toggleReadMore}
        className="ml-2 text-primary-50 hover:underline"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </button>
    </div>
  );
};

export default ReadMore;
