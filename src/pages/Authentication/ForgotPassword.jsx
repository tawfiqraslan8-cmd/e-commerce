import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import useThemeStore from "../../store/useThemeStore";


export default function ForgotPassword() {

    const { theme, themeToggle } = useThemeStore();


    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);



    const handleSubmit = (e) => {

        e.preventDefault();

        setError("");


        if (!email.trim()) {
            setError("Email is required");
            return;
        }


        const emailRegex =
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;


        if (!emailRegex.test(email)) {
            setError("Please enter a valid email");
            return;
        }


        setSuccess(true);


        console.log("Reset Password:", email);

    };



    return (

        <div

            className={`

                min-h-screen
                flex
                items-center
                justify-center
                px-4
                relative


                ${
                    theme === "dark"
                    ? "bg-[#212529]"
                    : "bg-[#e3f2fd]"
                }

            `}

        >





            {/* Theme Toggle */}

            <button

                onClick={themeToggle}

                className={`

                    absolute
                    top-5
                    right-5

                    w-14
                    h-7

                    rounded-full

                    flex
                    items-center

                    transition-all
                    duration-300


                    ${
                        theme === "dark"
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

                        shadow-md

                        flex
                        items-center
                        justify-center

                        transition-transform
                        duration-300


                        ${
                            theme === "dark"
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









            <div

                className={`

                    w-full
                    max-w-md

                    p-8

                    rounded-2xl

                    shadow-xl


                    ${
                        theme === "dark"
                        ? "bg-[#343a40] text-white"
                        : "bg-white text-black"
                    }

                `}

            >





                <div className="text-center mb-6">


                    <h1 className="text-3xl font-bold">

                        Forgot Password?

                    </h1>



                    <p

                        className={`

                            mt-2

                            ${
                                theme === "dark"
                                ? "text-gray-300"
                                : "text-slate-500"
                            }

                        `}

                    >

                        Enter your email and we'll send you a reset link.

                    </p>


                </div>








                {
                    success ? (

                        <div

                            className="
                                bg-green-100
                                text-green-700
                                p-4
                                rounded-lg
                                text-center
                            "

                        >

                            Password reset link sent successfully!

                        </div>


                    ) : (


                        <form onSubmit={handleSubmit}>


                            <div className="mb-4">


                                <label className="block mb-2 font-medium">

                                    Email Address

                                </label>






                                <input

                                    type="email"

                                    placeholder="example@email.com"

                                    value={email}

                                    onChange={(e)=>setEmail(e.target.value)}

                                    className={`

                                        w-full

                                        border

                                        rounded-lg

                                        p-3

                                        outline-none


                                        ${
                                            theme === "dark"

                                            ?

                                            "bg-[#212529] text-white border-gray-500 placeholder-gray-400"

                                            :

                                            "bg-white text-black border-gray-300"

                                        }

                                    `}

                                />







                                {
                                    error && (

                                        <p className="text-red-500 text-sm mt-2">

                                            {error}

                                        </p>

                                    )
                                }



                            </div>






                            <button

                                type="submit"

                                className="

                                    w-full

                                    bg-[#212529]

                                    text-white

                                    py-3

                                    rounded-lg

                                    hover:bg-[#343a40]

                                    transition

                                "

                            >

                                Send Reset Link


                            </button>





                        </form>


                    )
                }









                <div className="text-center mt-6">


                    <Link

                        to="/signin"

                        className={`
                            ${
                                theme === "dark"
                                ? "text-white"
                                : "text-black"
                            }
                        `}

                    >

                        Back to Sign In

                    </Link>


                </div>





            </div>



        </div>

    );

}