/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../components/Table.jsx";
import Chart from "../components/Chart.jsx";
import PieChart from "../components/PieChart.jsx";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("http://localhost:3000/api/data");
      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4 text-center">
      <h1 className="text-2xl m-auto p-4 font-bold mb-4 border-dotted underline underline-offset-8">
        Trade Data
      </h1>
      <Table data={data} setData={setData} />
      <Chart data={data} />
      <PieChart data={data} />
    </div>
  );
};

export default HomePage;
