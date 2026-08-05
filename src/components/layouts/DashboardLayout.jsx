import Navbar from "./Navbar";
import Sidebar from "../Sidebar";
import { Outlet } from "react-router-dom";
import useSidebarStore from "../../store/sidebar";
import useThemeStore from "../../store/useThemeStore";

export function DashboardLayout() {
  const { open } = useSidebarStore();
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
      <Navbar />

      {/* تحت Navbar */}
      <div className="flex mt-20">

        {/* Sidebar */}
        <Sidebar />

        {/* المحتوى */}
        <div
          className={`
            flex-1 min-w-0 min-h-screen
            p-6
            transition-all duration-300
            ${
              theme === "dark"
                ? "bg-[#343a40] text-white"
                : "bg-gray-100 text-black"
            }
            ${open ? "ml-64" : ""}
          `}
        >
          <Outlet />
        </div>

      </div>

    </div>
  );
}