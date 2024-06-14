/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchData = ({ isOpen, onClose, data, setSearchKeyword }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    setSearchKeyword(searchTerm);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Search Data</h2>
        <div className="flex mb-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="border rounded px-2 py-1 w-full"
          />
          <button
            onClick={handleSearch}
            className="ml-2 bg-blue-500 text-white p-2 rounded hover:bg-blue-700 transition duration-300"
          >
            <AiOutlineSearch className="text-xl" />
          </button>
        </div>
        <div className="flex justify-center">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchData;
