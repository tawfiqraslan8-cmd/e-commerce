import { rankingData } from "../data/dashboardData";
import useThemeStore from "../store/useThemeStore";

export default function SalesRanking() {

  const { theme } = useThemeStore();

  return (
    <div
      className={`
        rounded-2xl shadow-md p-6
        transition
        ${
          theme === "dark"
            ? "bg-[#343a40] text-white"
            : "bg-white text-black"
        }
      `}
    >

      <h2 className="text-xl font-bold mb-6">
        Sales Ranking
      </h2>


      <div className="space-y-5">

        {rankingData.map((country) => (

          <div key={country.name}>

            <div className="flex justify-between mb-2">

              <span>
                {country.name}
              </span>

              <span className="font-bold">
                {country.sales}
              </span>

            </div>


            <div
              className={`
                w-full h-2 rounded-full
                ${
                  theme === "dark"
                    ? "bg-gray-600"
                    : "bg-gray-200"
                }
              `}
            >

              <div
                className={`${country.color} h-2 rounded-full`}
                style={{ width: "70%" }}
              ></div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}