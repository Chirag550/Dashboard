// RecentOrders.js
import React from "react";
import { orders } from "../../configs/constants";

const getStatusClass = (status) => {
  switch (status) {
    case "Delivered":
      return "bg-green-100 text-green-800";
    case "Pending":
    case "Cancelled":
      return "bg-red-100 text-red-800";
    case "Shipped":
      return "bg-blue-200 text-blue-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};
const RecentOrders = () => {
  return (
    <div className="p-4 bg-gray-800 md:w-[55vw]">
      <h2 className="text-xl font-bold mb-4 text-white">Recent Orders</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full  bg-gray-800">
          <thead className="bg-gray-800">
            <tr>
              <th className="py-2 px-4 border-b text-white border-gray-300 text-left">
                Order ID
              </th>
              <th className="py-2 px-4 border-b text-white border-gray-300 text-left">
                Customer Name
              </th>
              <th className="py-2 px-4 border-b text-white border-gray-300 text-left">
                Date
              </th>
              <th className="py-2 px-4 border-b text-white border-gray-300 text-left">
                Total
              </th>
              <th className="py-2 px-4 border-b text-white border-gray-300 text-left">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="py-5 px-4 border-b text-white border-gray-300 text-left">
                  {order.id}
                </td>
                <td className="py-5 px-4 border-b text-white border-gray-300 text-left">
                  {order.customerName}
                </td>
                <td className="py-5 px-4 border-b text-white border-gray-300 text-left">
                  {order.date}
                </td>
                <td className="py-2 px-4 border-b text-white border-gray-300 text-left">
                  {order.total}
                </td>
                <td
                  className={`${getStatusClass(
                    order.status
                  )} border-r-2  py-2 px-3 border-b text-black border-gray-300 text-left`}
                >
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentOrders;
