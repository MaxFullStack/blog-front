import React from "react";

const Card = ({ title, body, author, onClick }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-md p-6 ${onClick ? "cursor-pointer transform hover:-translate-y-1 hover:shadow-lg transition-all duration-200" : ""
        } border border-gray-300 mx-4 my-2`}
      onClick={onClick}
    >
      <h2 className="text-2xl font-semibold">{title}</h2>
      <p className="text-gray-600 mt-2">{body}</p>
      {author && <p className="text-gray-600 mt-2">{author}</p>}
    </div >
  );
};

export default Card;
