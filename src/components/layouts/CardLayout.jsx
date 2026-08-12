import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import useThemeStore from "../../store/useThemeStore";

export default function CardLayout() {
  const { theme } = useThemeStore();

  return (
    <div
      className={`
        min-h-screen w-full
        ${
          theme === "dark"
            ? "bg-[#212529] text-white"
            : "bg-gray-100 text-black"
        }
      `}
    >

      {/* Navbar فوق */}
      <Navbar showSidebarButton={false} />

      {/* المحتوى */}
      <div className="flex mt-20">

        <div
          className={`
            flex-1 min-w-0 min-h-screen p-6
            ${
              theme === "dark"
                ? "bg-[#343a40] text-white"
                : "bg-gray-100 text-black"
            }
          `}
        >
          <Outlet />
        </div>

      </div>

    </div>
  );
}