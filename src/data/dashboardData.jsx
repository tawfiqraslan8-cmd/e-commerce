import {
  FaDollarSign,
  FaUsers,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";


export const stats = [
  
  {
    title: "Total Sales",
    value: "$154,430",
    change: "+12% this month",
    color: "blue",
    icon: FaDollarSign,
  },
  {
    title: "Visitors",
    value: "6,480",
    change: "+8% this month",
    color: "green",
    icon: FaUsers,
  },
  {
    title: "Orders",
    value: "5,320",
    change: "-2% this month",
    color: "yellow",
    icon: FaShoppingCart,
  },
  {
    title: "Performance",
    value: "88%",
    change: "Excellent",
    color: "purple",
    icon: FaChartLine,
  },
];
export const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 3000 },
  { month: "Mar", sales: 5000 },
  { month: "Apr", sales: 4500 },
  { month: "May", sales: 7000 },
  { month: "Jun", sales: 6500 },
];
export const rankingData = [
  { name: "Egypt", sales: "$25,000", color: "bg-blue-500" },
  { name: "Saudi Arabia", sales: "$18,000", color: "bg-green-500" },
  { name: "UAE", sales: "$14,500", color: "bg-purple-500" },
  { name: "Kuwait", sales: "$9,800", color: "bg-yellow-500" },
  { name: "Qatar", sales: "$8,200", color: "bg-red-500" },
];