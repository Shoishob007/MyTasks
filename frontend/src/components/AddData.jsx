/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AddData = ({ isOpen, onClose, formData, setFormData, handleSubmit }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    setFormData({
      trade_code: "",
      date: "",
      close: "",
      volume: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Add New Entry</h2>
        <form onSubmit={handleFormSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Trade Code</label>
            <input
              type="text"
              value={formData.trade_code}
              onChange={(e) =>
                setFormData({ ...formData, trade_code: e.target.value })
              }
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              value={formData.date}
              onChange={(e) =>
                setFormData({ ...formData, date: e.target.value })
              }
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Close</label>
            <input
              type="text"
              value={formData.close}
              onChange={(e) =>
                setFormData({ ...formData, close: e.target.value })
              }
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Volume</label>
            <input
              type="number"
              value={formData.volume}
              onChange={(e) =>
                setFormData({ ...formData, volume: e.target.value })
              }
              className="border rounded px-2 py-1 w-full"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-red-500 text-white px-4 py-2 rounded mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-emerald-500 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddData;
