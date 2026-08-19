import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { ShoppingCart } from "lucide-react";


import useSidebarStore from "../../store/sidebar";
import useThemeStore from "../../store/useThemeStore";
import UseAuthStore from "../../store/UseAuthStore";
import useCartStore from "../../store/useCartStore";

export default function Navbar({ showSidebarButton = true }) {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { toggleOpen } = useSidebarStore();
    const { theme, themeToggle } = useThemeStore();
    const { userRole, logout } = UseAuthStore();
    const { cart, openCart } = useCartStore();


    console.log("Navbar userRole:", userRole);
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

            <div className="w-full h-16 px-6 flex items-center justify-between gap-2">


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

                    {userRole !== "admin" && (
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg hover:bg-black/20 transition"
                        >
                            ☰
                        </button>
                    )}

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

                                <Link
                                    to="/admin/settings"
                                    className="
        font-bold
        hover:text-blue-400 
        transition
    "
                                >
                                    Settings
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


                {/* Mobile Navigation */}
                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div
                        className={`
            md:hidden
            absolute
            top-16
            left-0
            w-full
            shadow-lg
            border-t
            border-white/20
            z-50

            ${theme === "dark"
                                ? "bg-[#212529] text-white"
                                : "bg-[#64b5f6] text-white"
                            }
        `}
                    >
                        <div className="flex flex-col px-6 py-4 gap-2">

                            {userRole === "admin" ? (
                                <>
                                    <Link
                                        to="/admin/dashboard"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-bold p-3 rounded-lg hover:bg-black/20 transition"
                                    >
                                        Dashboard
                                    </Link>

                                    <Link
                                        to="/admin/products"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-bold p-3 rounded-lg hover:bg-black/20 transition"
                                    >
                                        Products
                                    </Link>

                                    <Link
                                        to="/admin/settings"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-bold p-3 rounded-lg hover:bg-black/20 transition"
                                    >
                                        Settings
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Link
                                        to="/"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-bold p-3 rounded-lg hover:bg-black/20 transition"
                                    >
                                        Home
                                    </Link>

                                    <Link
                                        to="/about"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-bold p-3 rounded-lg hover:bg-black/20 transition"
                                    >
                                        About
                                    </Link>

                                    <Link
                                        to="/services"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-bold p-3 rounded-lg hover:bg-black/20 transition"
                                    >
                                        Services
                                    </Link>

                                    <Link
                                        to="/contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-bold p-3 rounded-lg hover:bg-black/20 transition"
                                    >
                                        Contact
                                    </Link>

                                    <Link
                                        to="/card"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="font-bold p-3 rounded-lg hover:bg-black/20 transition"
                                    >
                                        Card
                                    </Link>
                                </>
                            )}

                        </div>
                    </div>
                )}



                {/* Right Actions */}
                <div className="flex items-center gap-1 shrink-0">

                    {/* Cart - User Only */}
                    {userRole !== "admin" && (
                        <button
                            onClick={openCart}
                            className="
            relative
            flex
            items-center
            justify-center
            p-2
            rounded-lg
            hover:bg-black/20
            transition
        "
                        >
                            <ShoppingCart size={24} />

                            {cart.length > 0 && (
                                <span
                                    className="
                    absolute
                    -top-1
                    -right-1
                    min-w-5
                    h-5
                    px-1
                    rounded-full
                    bg-red-500
                    text-white
                    text-xs
                    font-bold
                    flex
                    items-center
                    justify-center
                "
                                >
                                    {cart.length}
                                </span>
                            )}
                        </button>
                    )}



                    {/* Theme Toggle */}
                    <button
                        onClick={themeToggle}
                        className={`
    relative
    w-11
    h-6
    rounded-full
    transition-all
    duration-300
    flex
    items-center
    shrink-0

    ${theme === "dark"
                                ? "bg-gray-800"
                                : "bg-gray-300"
                            }
`}
                    >

                        <span

                            className={`
        absolute
        w-5
        h-5
        rounded-full
        bg-white
        flex
        items-center
        justify-center
        shadow-md
        transition-transform
        duration-300

        ${theme === "dark"
                                    ? "translate-x-5"
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
    px-2 py-1
    md:px-5 md:py-2
    rounded-lg
    bg-[#0077b6]
    text-white
    font-bold
    text-xs
    md:text-base
    whitespace-nowrap
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
    px-2 py-1
    rounded-lg
    bg-[#0077b6]
    text-white
    font-bold
    text-[11px]
    whitespace-nowrap
    md:px-5 md:py-2
    md:text-base
"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    to="/signup"
                                    className="
    px-2 py-1
    rounded-lg
    bg-[#0077b6]
    text-white
    font-bold
    text-[11px]
    whitespace-nowrap
    md:px-5 md:py-2
    md:text-base
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