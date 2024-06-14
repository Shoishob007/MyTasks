/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import AddData from "./AddData";
import SearchData from "./SearchData";
import { AiOutlinePlus, AiOutlineSearch } from "react-icons/ai";

const Table = ({ data, setData }) => {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    trade_code: "",
    date: "",
    close: "",
    volume: "",
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const pageSize = 20;

  useEffect(() => {
    setCurrentPage(1);
  }, [data, searchKeyword]);

  const filteredData = data.filter((item) =>
    Object.values(item).some(
      (field) =>
        typeof field === "string" &&
        field.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  );

  const indexOfLastItem = currentPage * pageSize;
  const indexOfFirstItem = indexOfLastItem - pageSize;
  const currentData = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const handleEdit = (item) => {
    setEditingId(item.id);
    setFormData({
      trade_code: item.trade_code,
      date: item.date,
      close: item.close,
      volume: item.volume,
    });
  };

  const handleSave = async (id) => {
    await axios.put(`http://localhost:3000/api/data/${id}`, formData);
    setData(
      data.map((item) => (item.id === id ? { ...item, ...formData } : item))
    );
    setEditingId(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/api/data/${id}`);
    setData(data.filter((item) => item.id !== id));
  };

  const handleAdd = async (e) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-vars
    const response = await axios.post(
      "http://localhost:3000/api/data",
      formData
    );
    setData([formData, ...data], () => {
      setIsModalOpen(false);
      setFormData({
        trade_code: "",
        date: "",
        close: "",
        volume: "",
      });
    });
  };

  const handleSearch = () => {
    setIsSearchModalOpen(true);
  };

  return (
    <>
      <table className="min-w-full bg-white border-2 border-blue-950 text-sm">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="w-1/5 px-2 py-1">Trade Code</th>
            <th className="w-1/5 px-2 py-1">Date</th>
            <th className="w-1/5 px-2 py-1">Close</th>
            <th className="w-1/5 px-2 py-1">Volume</th>
            <th className="w-1/5 px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item) => (
            <tr key={item.id}>
              {editingId === item.id ? (
                <>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    <input
                      type="text"
                      value={formData.trade_code}
                      onChange={(e) =>
                        setFormData({ ...formData, trade_code: e.target.value })
                      }
                      className="border rounded px-2 text-xs"
                    />
                  </td>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      className="border rounded px-2 text-xs"
                    />
                  </td>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    <input
                      type="text"
                      value={formData.close}
                      onChange={(e) =>
                        setFormData({ ...formData, close: e.target.value })
                      }
                      className="border rounded px-2 text-xs"
                    />
                  </td>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    <input
                      type="text"
                      value={formData.volume}
                      onChange={(e) =>
                        setFormData({ ...formData, volume: e.target.value })
                      }
                      className="border rounded px-2 text-xs"
                    />
                  </td>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    <button
                      onClick={() => handleSave(item.id)}
                      className="bg-emerald-500 text-white px-2 py-1 rounded text-xs hover:bg-emerald-700 duration-200 mr-10"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs hover:bg-red-700 duration-200"
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    {item.trade_code}
                  </td>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    {item.date}
                  </td>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    {item.close}
                  </td>
                  <td className="border-2 border-gray-800 px-2 py-1">
                    {item.volume}
                  </td>
                  <td className="border-2 border-gray-800 px-2 py-1 text-center">
                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-indigo-500 text-white px-2 py-1 rounded text-xs hover:bg-indigo-700 duration-200 mr-10"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="bg-red-500 text-white px-2 py-1 rounded text-xs hover duration-200"
                    >
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        indexOfLastItem={indexOfLastItem}
        data={filteredData}
      />

      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <AiOutlinePlus className="text-2xl" />
      </button>

      <button
        onClick={handleSearch}
        className="fixed bottom-20 right-5 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
      >
        <AiOutlineSearch className="text-2xl" />
      </button>

      <SearchData
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        data={data}
        setSearchKeyword={setSearchKeyword}
      />

      <AddData
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleAdd}
      />
    </>
  );
};

export default Table;
