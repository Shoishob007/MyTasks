/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ data }) => {
  const tradeCodes = [...new Set(data.map((item) => item.trade_code))];
  const [selectedTradeCode, setSelectedTradeCode] = useState("");

  const handleTradeCodeChange = (e) => {
    setSelectedTradeCode(e.target.value);
  };

  const filteredData = selectedTradeCode
    ? data.filter((item) => item.trade_code === selectedTradeCode)
    : data;

  const convertToNumber = (value) => {
    if (typeof value === "string") {
      const cleanValue = value.replace(/,/g, "");
      if (!isNaN(cleanValue)) {
        return Number(cleanValue);
      }
    }
    return value;
  };

  const labels = filteredData.map((row) => row.date);
  const closeData = filteredData.map((row) => convertToNumber(row.close));
  const volumeData = filteredData.map((row) => convertToNumber(row.volume));

  const chartData = {
    labels,
    datasets: [
      {
        type: "line",
        label: "Close",
        data: closeData,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        yAxisID: "y-axis-1",
        borderWidth: 2,
        pointRadius: 3,
      },
      {
        type: selectedTradeCode ? "bar" : "line",
        label: "Volume",
        data: volumeData,
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        yAxisID: "y-axis-2",
        borderWidth: 2,
        pointRadius: 3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      "y-axis-1": {
        type: "linear",
        position: "left",
        ticks: {
          callback: function (value) {
            return value.toLocaleString();
          },
        },
      },
      "y-axis-2": {
        type: "linear",
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function (value) {
            return value.toLocaleString();
          },
        },
      },
    },
  };

  return (
    <div className="mt-10">
      <h2 className="m-auto font-semibold text-xl underline underline-offset-4">
        Graphical Representations
      </h2>
      <div className="flex flex-col mt-8">
        <div className="w-full mb-4">
          <select
            className="w-1/4 m-auto p-2 border border-gray-300 rounded"
            value={selectedTradeCode}
            onChange={handleTradeCodeChange}
          >
            <option value="">All Trade Codes</option>
            {tradeCodes.map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full flex flex-col" style={{ height: "450px" }}>
          {selectedTradeCode ? (
            <Bar data={chartData} options={options} />
          ) : (
            <Line data={chartData} options={options} />
          )}
        </div>
        <p className="text-sm text-gray-600 mt-4 text-center self-center font-medium">
          This chart displays{" "}
          <i className="text-emerald-500 font-semibold">"Close"</i> and{" "}
          <i className="text-violet-500 font-semibold">"Volume"</i> data with
          respect to date specified. <br /> The y-axis scales dynamically based
          on the maximum values present in the dataset.
        </p>
      </div>
    </div>
  );
};

export default Chart;
