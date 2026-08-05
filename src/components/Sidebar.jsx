import { Link, useLocation } from "react-router-dom";
import useSidebarStore from "../store/sidebar";
import useThemeStore from "../store/useThemeStore";

export default function Sidebar() {
  const { open, toggleOpen } = useSidebarStore();
  const { theme } = useThemeStore();
  const location = useLocation();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Dashboard", path: "/dashboard" },
    { name: "Products", path: "/products" },
    { name: "Card", path: "/card" },
    { name: "Settings", path: "/settings" },
  ];

  return (
    <>
      {/* زر الموبايل */}
      <button onClick={toggleOpen}>
        ☰
      </button>

      {open && (
        <div
          onClick={toggleOpen}
          className="fixed inset-0 bg-black/50 z-30"
        />
      )}

      <aside
        className={`
          fixed top-[60px] left-0 z-40
          w-64 h-[calc(200vh-80px)]
          ${
            theme === "dark"
              ? "bg-[#212529] text-black"
              : "bg-[#64b5f6] text-black"
          }
          // p-5
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-64"}
        `}
      >
        <ul className="space-y-4 mt-10 md:mt-0">
          {menu.map((item) => (
            <li key={item.path}>
             <Link
  to={item.path}
  className={`
    block
    transition
    hover:text-[#023e8a]
    ${
      location.pathname === item.path
        ? theme === "dark"
          ? "text-blue-600 font-semibold"
          : "text-[#023e8a] font-semibold"
        : "text-white"
    }
  `}
>
  {item.name}
</Link>
            </li>
          ))}
        </ul>
      </aside>
    </>
  );
}