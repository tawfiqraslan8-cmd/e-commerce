import { useNavigate } from "react-router-dom";
import useThemeStore from "../../store/useThemeStore";

export default function Home() {
  const navigate = useNavigate();
  const { theme } = useThemeStore();

  return (
    <div
      className={`
        min-h-[calc(100vh-80px)]
        flex items-center justify-center
        ${
          theme === "dark"
            ? "bg-gradient-to-br from-[#343a40] to-[#212529] text-white"
            : "bg-gradient-to-br from-[#bbdefb] to-[#bbdefb] text-black"
        }
      `}
    >

      <div className="text-center space-y-6 max-w-xl px-4">

        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to My App
        </h1>

        <p
          className={`
            text-lg
            ${
              theme === "dark"
                ? "text-gray-300"
                : "text-black"
            }
          `}
        >
          Build modern React apps with clean UI and powerful routing
        </p>

        <div className="flex gap-4 justify-center flex-wrap">

          <button
            onClick={() => navigate("/SignIn")}
            className={`
              px-6 py-3
              border rounded-lg
              transition
              ${
                theme === "dark"
                  ? "border-gray-400 hover:bg-white hover:text-black"
                  : "border-slate-500 hover:bg-[#212529]"
              }
            `}
          >
            Sign In
          </button>

          <button
            onClick={() => navigate("/SignUp")}
            className={`
              px-6 py-3 rounded-lg transition
              ${
                theme === "dark"
                  ? "bg-white text-black hover:bg-gray-300"
                  : "bg-[#212529] text-white hover:bg-[#adb5bd]"
              }
            `}
          >
            Sign Up
          </button>

        </div>

      </div>
    </div>
  );
}