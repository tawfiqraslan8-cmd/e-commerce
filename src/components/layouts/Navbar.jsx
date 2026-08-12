import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";

import useSidebarStore from "../../store/sidebar";
import useThemeStore from "../../store/useThemeStore";
import UseAuthStore from "../../store/UseAuthStore";

export default function Navbar({ showSidebarButton = true }) {

    const { toggleOpen } = useSidebarStore();
    const { theme, themeToggle } = useThemeStore();
    const { userRole, logout } = UseAuthStore();



    return (
        <nav
            className={`
                sticky top-0 z-50
                ${theme === "dark"
                    ? "bg-[#212529] text-white border-b border-slate-200"
                    : "bg-[#64b5f6] text-white "
                }
            `}
        >

            <div className="w-full h-16 px-6 flex items-center justify-between">


                {/* Logo */}
                <div className="flex items-center gap-3">

                    {userRole === 'admin' ?
                        showSidebarButton && (
                            <button
                                onClick={toggleOpen}
                                className="
                                p-2 
                                rounded-lg 
                                hover:bg-black/20 
                                transition
                            "
                            >
                                ☰
                            </button>
                        ) : null
                    }

                    <Link
                        to="/"
                        className="
                            text-2xl
                            font-extrabold
                            tracking-wide
                        "
                    >
                        MyApp
                    </Link>

                </div>





                {/* Navigation */}
                <div className="hidden md:flex items-center gap-8">


                    {
                        userRole === "admin" ? (

                            <>
                                <Link
                                    to="/admin/dashboard"
                                    className="
        font-bold
        hover:text-blue-400 
        transition
    "
                                >
                                    Dashboard
                                </Link>


                                <Link
                                    to="/admin/products"
                                    className="
        font-bold
        hover:text-blue-400 
        transition
    "
                                >
                                    Products
                                </Link>
                            </>


                        ) : (

                            <>

                                <Link
                                    to="/"
                                    className="
        font-bold
        hover:text-blue-400 
        transition
    "
                                >
                                    Home
                                </Link>


                                <Link
                                    to="/about"
                                    className="
        font-bold
        hover:text-blue-400 
        transition
    "
                                >
                                    About
                                </Link>


                                <Link
                                    to="/services"
                                    className="
        font-bold
        hover:text-blue-400 
        transition
    "
                                >
                                    Services
                                </Link>


                                <Link
                                    to="/contact"
                                    className="
        font-bold
        hover:text-blue-400 
        transition
    "
                                >
                                    Contact
                                </Link>

                                <Link
                                    to="/card"
                                    className="
    font-bold
    hover:text-blue-400 
    transition
  "
                                >
                                    Card
                                </Link>

                            </>

                        )

                    }


                </div>






                {/* Right Actions */}
                <div className="flex items-center gap-3">



                    {/* Theme Toggle */}
                    <button
                        onClick={themeToggle}
                        className={`
                            relative
                            w-14
                            h-7
                            rounded-full
                            transition-all
                            duration-300
                            flex
                            items-center

                            ${theme === "dark"
                                ? "bg-gray-800"
                                : "bg-gray-300"
                            }
                        `}
                    >

                        <span
                            className={`
                                absolute
                                w-6
                                h-6
                                rounded-full
                                bg-white
                                flex
                                items-center
                                justify-center
                                shadow-md
                                transition-transform
                                duration-300

                                ${theme === "dark"
                                    ? "translate-x-7"
                                    : "translate-x-1"
                                }
                            `}
                        >

                            {
                                theme === "dark"
                                    ?
                                    <FiMoon
                                        size={14}
                                        className="text-gray-800"
                                    />
                                    :
                                    <FiSun
                                        size={14}
                                        className="text-yellow-500"
                                    />
                            }

                        </span>

                    </button>




                    {
                        userRole && (
                            <button
                                onClick={() => {
                                    logout();
                                    window.location.href = "/signin";
                                }}
                                className="
        px-5 py-2
        rounded-lg
        bg-[#0077b6]
        text-white
        font-bold
    "
                            >
                                Logout
                            </button>
                        )
                    }

                    {
                        !userRole && (
                            <>
                                <Link
                                    to="/signin"
                                    className="
                            px-5 py-2
                            rounded-lg
                            hover:border-black
                            transition
                            bg-[#0077b6]
                            text-white
                            font-bold
                        "
                                >
                                    Sign In
                                </Link>





                                <Link
                                    to="/signup"
                                    className="
                            px-5 py-2
                            rounded-lg
                            
                            hover:border-black
                            transition
                            bg-[#0077b6]
                            text-white
                            font-bold
                        "
                                >
                                    Get Started
                                </Link>

                            </>
                        )
                    }


                </div>


            </div>

        </nav>
    );
}