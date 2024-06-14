/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const PieChart = ({ data }) => {
  const dateRanges = [
    { label: "Week 1", startDate: "2020-07-01", endDate: "2020-07-07" },
    { label: "Week 2", startDate: "2020-07-08", endDate: "2020-07-14" },
    { label: "Week 3", startDate: "2020-07-15", endDate: "2020-07-21" },
    { label: "Week 4", startDate: "2020-07-22", endDate: "2020-07-28" },
    { label: "Week 5", startDate: "2020-07-29", endDate: "2020-08-04" },
    { label: "Week 6", startDate: "2020-08-05", endDate: "2020-08-11" },
    { label: "Week 7", startDate: "2020-08-12", endDate: "2020-08-18" },
    { label: "Week 8", startDate: "2020-08-19", endDate: "2020-08-25" },
    { label: "Week 9", startDate: "2020-08-26", endDate: "2020-08-31" },
  ];

  const groupedData = dateRanges.map((range) => ({
    label: range.label,
    value: data.filter(
      (item) => item.date >= range.startDate && item.date <= range.endDate
    ).length,
  }));

  const missingData = groupedData.filter((item) => item.value === 0);
  const missingDataValue = missingData.length > 0 ? 1 : 0;

  const pieChartData = {
    labels: groupedData.map((item) => item.label),
    datasets: [
      {
        label: "Data by Week",
        data: groupedData
          .map((item) => item.value)
          .concat(missingDataValue ? [missingData.length] : []),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(199, 199, 199, 0.6)",
          "rgba(83, 102, 255, 0.6)",
          "rgba(83, 255, 102, 0.6)",
          "rgba(255, 0, 0, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(199, 199, 199, 1)",
          "rgba(83, 102, 255, 1)",
          "rgba(83, 255, 102, 1)",
          "rgba(255, 0, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="mt-10">
      <h2 className="m-auto font-semibold text-xl underline underline-offset-4">
        Data Distribution by Week
      </h2>
      <div className="flex justify-center mt-8">
        <div className="w-3/4 md:w-2/3 lg:w-1/2">
          <Pie data={pieChartData} />
        </div>
      </div>
      {missingData.length > 0 && (
        <p className="text-sm text-gray-600 mt-4 text-center">
          Missing data for {missingData.map((item) => item.label).join(", ")}.
        </p>
      )}
    </div>
  );
};

export default PieChart;
