import { useState } from "react";
import useThemeStore from "../../store/useThemeStore";

export default function Settings() {
  const { theme, themeToggle } = useThemeStore();

  const [form, setForm] = useState({
    siteName: "MyApp",
    email: "admin@example.com",
    phone: "01000000000",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Settings Data:", form);

    alert("Settings Saved");
  }

  return (
    <div
      className={`
        min-h-screen
        p-6
        ${
          theme === "dark"
            ? "bg-[#343a40] text-white"
            : "bg-gray-100 text-black"
        }
      `}
    >

      <h1 className="text-3xl font-bold mb-6">
        Settings
      </h1>


      <div
        className={`
          max-w-3xl
          rounded-xl
          p-6
          shadow-lg
          ${
            theme === "dark"
              ? "bg-[#212529]"
              : "bg-white"
          }
        `}
      >

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >


          {/* Site Name */}
          <div>
            <label className="block mb-2 font-semibold">
              Site Name
            </label>

            <input
              type="text"
              name="siteName"
              value={form.siteName}
              onChange={handleChange}
              className="
                w-full
                p-3
                rounded-lg
                border
                text-black
              "
            />
          </div>



          {/* Email */}
          <div>
            <label className="block mb-2 font-semibold">
              Admin Email
            </label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="
                w-full
                p-3
                rounded-lg
                border
                text-black
              "
            />
          </div>



          {/* Phone */}
          <div>
            <label className="block mb-2 font-semibold">
              Phone
            </label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="
                w-full
                p-3
                rounded-lg
                border
                text-black
              "
            />
          </div>



          {/* Theme */}
          <div className="flex items-center justify-between">

            <span className="font-semibold">
              Dark Mode
            </span>


            <button
              type="button"
              onClick={themeToggle}
              className="
                px-5
                py-2
                rounded-lg
                bg-[#212529]
                text-white
              "
            >
              Change Theme
            </button>

          </div>



          {/* Save */}
          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-lg
              bg-[#0077b6]
              text-white
              font-bold
              hover:bg-[#023e8a]
              transition
            "
          >
            Save Settings
          </button>


        </form>


      </div>


    </div>
  );
}