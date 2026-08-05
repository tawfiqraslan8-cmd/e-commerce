import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

import { salesData } from "../data/dashboardData";
import useThemeStore from "../store/useThemeStore";

export default function SalesChart() {

  const { theme } = useThemeStore();

  return (
    <div className="h-[320px]">

      <ResponsiveContainer width="100%" height="100%">

        <LineChart data={salesData}>

          <CartesianGrid
            strokeDasharray="3 3"
            stroke={
              theme === "dark"
                ? "#6c757d"
                : "#e5e7eb"
            }
          />


          <XAxis
            dataKey="month"
            stroke={
              theme === "dark"
                ? "#ffffff"
                : "#000000"
            }
          />


          <YAxis
            stroke={
              theme === "dark"
                ? "#ffffff"
                : "#000000"
            }
          />


          <Tooltip
            contentStyle={{
              backgroundColor:
                theme === "dark"
                  ? "#343a40"
                  : "#ffffff",

              color:
                theme === "dark"
                  ? "#ffffff"
                  : "#000000",

              borderRadius: "10px",
            }}
          />


          <Line
            type="monotone"
            dataKey="sales"
            stroke="#2563eb"
            strokeWidth={3}
          />


        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}