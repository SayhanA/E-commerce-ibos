import React from "react";

const Pagination = ({ className='', totalPages, currentPage }) => {
  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        pages.push(
          <button
            key={i}
            className="w-12 h-12 rounded-lg border-2 border-black flex items-center justify-center"
          >
            {i}
          </button>
        );
      } else if (i === 1 || i === totalPages || Math.abs(i - currentPage) < 2) {
        pages.push(
          <button
            key={i}
            className="w-12 h-12 rounded-lg border-2 border-gray-200 text-gray-600 flex items-center justify-center"
          >
            {i}
          </button>
        );
      } else if (Math.abs(i - currentPage) === 2) {
        pages.push(
          <div
            key={i}
            className="w-12 h-12 rounded-lg border-2 border-gray-200 text-gray-600 flex items-center justify-center"
          >
            ...
          </div>
        );
      }
    }
    return pages;
  };

  return (
    <div className={`${className} flex justify-center items-center gap-4 mt-8`}>
      <button
        className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center"
        disabled={currentPage === 1}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.25 19.25L8.75 12.75L15.25 6.25"
          />
        </svg>
      </button>

      {renderPageNumbers()}

      <button
        className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center"
        disabled={currentPage === totalPages}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.75 19.25L15.25 12.75L8.75 6.25"
          />
        </svg>
      </button>
    </div>
  );
};

export default Pagination;
