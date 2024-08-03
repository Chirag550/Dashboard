import { MdEmail } from "react-icons/md";
import { MdSettings } from "react-icons/md";
import { MdNotifications } from "react-icons/md";
import { MdHome } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import { BsFillClipboardCheckFill } from "react-icons/bs";

export const navItems = [
  {
    icons: <MdEmail className="text-2xl md:text-3xl" />,
  },
  {
    icons: <MdSettings className="text-2xl md:text-3xl" />,
  },
  {
    icons: <MdNotifications className="text-2xl md:text-3xl" />,
  },
];

export const sidebarItems = [
  {
    icons: <MdHome className="text-3xl" />,
    url: "/home",
  },
  {
    icons: <MdAnalytics className="text-3xl" />,
    url: "/analytics",
  },
  {
    icons: <BsFillClipboardCheckFill className="text-3xl" />,
    url: "/orders",
  },
  {
    icons: <FaCartPlus className="text-3xl" />,
    url: "/cart",
  },
  {
    icons: <IoBagCheck className="text-3xl" />,
    url: "/delivered",
  },
];

export const orders = [
  {
    id: "ORD001",
    customerName: "John Doe",
    date: "2024-07-15",
    total: "$150.00",
    status: "Delivered",
  },
  {
    id: "ORD001",
    customerName: "John Doe",
    date: "2024-07-15",
    total: "$150.00",
    status: "Delivered",
  },
  {
    id: "ORD001",
    customerName: "John Doe",
    date: "2024-07-15",
    total: "$150.00",
    status: "Delivered",
  },
  {
    id: "ORD004",
    customerName: "Chris Evans",
    date: "2024-07-12",
    total: "$450.00",
    status: "Shipped",
  },
  {
    id: "ORD002",
    customerName: "Jane Smith",
    date: "2024-07-14",
    total: "$200.00",
    status: "Pending",
  },
  {
    id: "ORD003",
    customerName: "Sam Wilson",
    date: "2024-07-13",
    total: "$350.00",
    status: "Cancelled",
  },
  {
    id: "ORD004",
    customerName: "Chris Evans",
    date: "2024-07-12",
    total: "$450.00",
    status: "Shipped",
  },
];
