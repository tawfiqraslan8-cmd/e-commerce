import useThemeStore from "../store/useThemeStore";

export default function ThemeWrapper({ children }) {
  const { theme } = useThemeStore();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark"
          ? "bg-[#212529] text-white"
          : "bg-gray-100 text-black"
      }`}
    >
      {children}
    </div>
  );
}