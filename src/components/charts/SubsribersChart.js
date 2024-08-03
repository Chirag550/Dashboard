import { React, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
const weeklyData = [
  { name: "Mon", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Tue", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Wed", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Thu", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Fri", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Sat", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Sun", uv: 3490, pv: 4300, amt: 2100 },
];

const monthlyData = [
  { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
  { name: "May", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Aug", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Sep", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Oct", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Nov", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Dec", uv: 3490, pv: 4300, amt: 2100 },
];

const SubscribersChart = () => {
  const [timePeriod, setTimePeriod] = useState("Weekly");

  const handleChange = (event) => {
    setTimePeriod(event.target.value);
  };

  const data = timePeriod === "Weekly" ? weeklyData : monthlyData;
  return (
    <div className=" md:p-5  rounded bg-gray-800 md:w-[55vw]  md:h-[48vh] xl:h-[50vh]">
      <div className="w-full md:p-0 p-1 flex justify-between items-center">
        <h3 className="text-2xl md:text-3xl font-bold p-1 text-white">
          Activity{" "}
        </h3>
        <div>
          {" "}
          <select
            value={timePeriod}
            onChange={handleChange}
            className="md:p-1 border border-gray-300 rounded-md  focus:outline-none focus:border-gray-500 bg-gray-600 text-white"
          >
            <option value="Weekly">Weekly</option>
            <option value="Monthly">Monthly</option>
          </select>
        </div>
      </div>

      <ResponsiveContainer width={"100%"} height={250}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" />
          <Bar dataKey="uv" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubscribersChart;
