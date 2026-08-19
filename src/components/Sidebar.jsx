import { Link, useLocation } from "react-router-dom";
import useSidebarStore from "../store/sidebar";
import useThemeStore from "../store/useThemeStore";
import UseAuthStore from "../store/UseAuthStore";

export default function Sidebar() {
  const { open, toggleOpen } = useSidebarStore();
  console.log("Sidebar component loaded");
console.log("sidebar open:", open);
  const { theme } = useThemeStore();
const { userRole } = UseAuthStore();
const location = useLocation();

 const menu =
  userRole === "admin"
    ? [
        { name: "Dashboard", path: "/admin/dashboard" },
        { name: "Products", path: "/admin/products" },
        { name: "Settings", path: "/admin/settings" },
      ]
    : [
        { name: "Home", path: "/" },
        { name: "Profile", path: "/profile" },
        { name: "Card", path: "/card" },
      ];

  return (
    <>
      {/* زر الموبايل */}

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