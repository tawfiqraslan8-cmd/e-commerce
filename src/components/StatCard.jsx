import useThemeStore from "../store/useThemeStore";

export default function StatCard({ item }) {

  const { theme } = useThemeStore();

  return (
    <div
      className={`
        rounded-2xl shadow-md p-6 
        flex items-center justify-between
        transition
        ${
          theme === "dark"
            ? "bg-[#343a40] text-white"
            : "bg-white text-black"
        }
      `}
    >

      <div>

        <p
          className={`
            text-sm
            ${theme === "dark" ? "text-gray-300" : "text-gray-500"}
          `}
        >
          {item.title}
        </p>


        <h2 className="text-3xl font-bold mt-2">
          {item.value}
        </h2>


        <p className="text-green-500 text-sm mt-2">
          {item.change}
        </p>

      </div>


      <div
        className={`
          w-14 h-14 rounded-full 
          flex items-center justify-center text-2xl
          ${
            theme === "dark"
              ? "bg-[#495057]"
              : "bg-gray-100"
          }
        `}
      >
        <item.icon />
      </div>


    </div>
  );
}