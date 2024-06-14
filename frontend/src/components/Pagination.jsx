/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Pagination = ({ currentPage, setCurrentPage, indexOfLastItem, data }) => {
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <div className="flex items-center justify-center mt-4 space-x-4">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="bg-indigo-500 hover:bg-indigo-700 w-10 h-10 flex justify-center items-center text-white text-xl rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
        >
          <AiOutlineArrowLeft className="text-white" />
        </button>
        <span className="font-bold text-md text-gray-700">
          Page {currentPage}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastItem >= data.length}
          className="bg-indigo-500 hover:bg-indigo-700 w-10 h-10 flex justify-center items-center text-white text-xl rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition duration-300 ease-in-out"
        >
          <AiOutlineArrowRight className="text-white" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
