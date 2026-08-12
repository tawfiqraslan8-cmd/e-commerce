import StatCard from "../../components/StatCard";
import SalesChart from "../../components/SalesChart";
import SalesRanking from "../../components/SalesRanking";
import { stats } from "../../data/dashboardData";
import useThemeStore from "../../store/useThemeStore";

export default function Dashboard() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`
        p-6 min-h-screen
        ${
          theme === "dark"
            ? "bg-[#343a40] text-white"
            : "bg-gray-100 text-black"
        }
      `}
    >

      <h1 className="text-3xl font-bold mb-6">
        Dashboard
      </h1>


      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item) => (
          <StatCard
            key={item.title}
            item={item}
          />
        ))}

      </div>



      {/* Chart + Ranking */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-8">


        {/* Chart */}
        <div
          className={`
            xl:col-span-2 rounded-2xl shadow-md p-6
            ${
              theme === "dark"
                ? "bg-[#212529] text-white"
                : "bg-white text-black"
            }
          `}
        >

          <div className="flex items-center justify-between mb-6">

            <h2 className="text-xl font-bold">
              Sales Overview
            </h2>


            <select
              className={`
                border rounded-lg px-3 py-2 text-sm
                ${
                  theme === "dark"
                    ? "bg-[#343a40] text-white border-gray-600"
                    : "bg-white text-black"
                }
              `}
            >

              <option>
                This Month
              </option>

              <option>
                Last Month
              </option>

              <option>
                This Year
              </option>

            </select>

          </div>


          <SalesChart />


        </div>



        {/* Ranking */}
        <SalesRanking />


      </div>

    </div>
  );
}