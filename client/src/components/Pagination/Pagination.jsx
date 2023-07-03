import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
const Pagination = ({ page, setPage }) => {
  return (
    <div className="flex">
      <nav aria-label="Pagination">
        <div className="page-contain flex  items-center gap-2  p-1 rounded-md">
          <button
            onClick={() => setPage((prev) => (prev === 1 ? 1 : prev - 1))}
            className="inline-flex ml-5 items-center  space-x-2 rounded-r-md  rounded-md bg-[#F1F1F1] px-6 py-3 font-medium text-gray-500 hover:bg-gray-50"
          >
            <IoIosArrowBack />
            <span>Prev</span>
          </button>

          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="inline-flex ml-5 items-center  space-x-2 rounded-r-md  rounded-md bg-[#F1F1F1] px-6 py-3 font-medium text-gray-500 hover:bg-gray-50"
          >
            <span>Next</span>
            <IoIosArrowForward />
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
