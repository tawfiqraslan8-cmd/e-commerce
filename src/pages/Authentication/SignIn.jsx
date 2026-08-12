import * as React from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  TextField,
  Paper,
} from "@mui/material";

import { useState } from "react";
import useThemeStore from "../../store/useThemeStore";
import UseAuthStore from "../../store/UseAuthStore";


export default function SignIn() {

  const { theme, themeToggle } = useThemeStore();
  const { login } = UseAuthStore();
  const navigate = useNavigate();


  const [form, setForm] = useState({
    email: "",
    password: "",
  });


  const [errors, setErrors] = useState({});


  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }



  function validate() {

    const err = {};

    if (!form.email.includes("@")) {
      err.email = "Invalid email address";
    }

    if (form.password.length < 6) {
      err.password = "Password must be at least 6 characters";
    }

    setErrors(err);

    return Object.keys(err).length === 0;
  }



  async function handleSubmit(e) {

    e.preventDefault();


    if (!validate()) return;


    try {

      console.log("Login Data:", form);


      const token = "jhfjjlgjlhgkjg";
      const userRole = "admin";


      login(token, userRole);

      if (userRole === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (error) {

      console.log(error);

    }

  }





  const inputStyle = {

    "& .MuiInputBase-input": {
      color:
        theme === "dark"
          ? "#fff"
          : "#000",
    },


    "& .MuiInputLabel-root": {
      color:
        theme === "dark"
          ? "#ddd"
          : "#555",
    },


    "& .MuiOutlinedInput-root": {

      "& fieldset": {
        borderColor:
          theme === "dark"
            ? "#aaa"
            : "#ccc",
      },


      "&:hover fieldset": {
        borderColor:
          theme === "dark"
            ? "#fff"
            : "#000",
      },

    },

  };





  return (
    <>

      <CssBaseline />


      <Box
        sx={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 2,

          background:
            theme === "dark"
              ? "#212529"
              : "linear-gradient(135deg,#bbdefb,#e3f2fd)",
        }}
      >


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

            ${theme === "dark"
              ? "bg-gray-800"
              : "bg-gray-300"
            }
          `}
        >

          <span
            className={`
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
                <FiMoon size={14} className="text-gray-800" />
                :
                <FiSun size={14} className="text-yellow-500" />
            }

          </span>

        </button>





        <Paper

          elevation={10}

          sx={{

            width: 420,

            p: 4,

            borderRadius: 4,


            backgroundColor:
              theme === "dark"
                ? "#343a40"
                : "#fff",


            color:
              theme === "dark"
                ? "#fff"
                : "#000",

          }}

        >



          <Box textAlign="center">

            <h1
              style={{
                margin: 0,
                fontSize: 28
              }}
            >
              Welcome Back
            </h1>


            <p
              style={{
                marginTop: 6,
                color:
                  theme === "dark"
                    ? "#ddd"
                    : "#666"
              }}
            >
              Sign in to continue
            </p>


          </Box>





          {/* واحد فورم لكل الانبوتس */}

          <Box
            component="form"
            onSubmit={handleSubmit}
          >


            <TextField

              fullWidth

              name="email"

              label="Email"

              value={form.email}

              onChange={handleChange}

              error={!!errors.email}

              helperText={errors.email}

              sx={{
                ...inputStyle,
                mb: 2
              }}

            />





            <TextField

              fullWidth

              name="password"

              label="Password"

              type="password"

              value={form.password}

              onChange={handleChange}

              error={!!errors.password}

              helperText={errors.password}

              sx={{
                ...inputStyle,
                mb: 2
              }}

            />







            <FormControlLabel

              control={
                <Checkbox
                  sx={{
                    color:
                      theme === "dark"
                        ? "#fff"
                        : undefined
                  }}
                />
              }

              label="Remember me"

            />







            <Button

              type="submit"

              variant="contained"

              fullWidth

              sx={{
                mt: 2,
                py: 1.5,
                borderRadius: 2,
                textTransform: "none",
                backgroundColor: "[#0077b6]",

                "&:hover": {
                  backgroundColor: "blue-700"
                }

              }}

            >

              Sign In

            </Button>







            <Box textAlign="center" mt={2}>

              <Link

                to="/forgot-password"

                style={{
                  color:
                    theme === "dark"
                      ? "#fff"
                      : "#000"
                }}

              >

                Forgot password?

              </Link>

            </Box>






            <Box textAlign="center" mt={1}>

              <Link

                to="/signup"

                style={{
                  color:
                    theme === "dark"
                      ? "#fff"
                      : "#000"
                }}

              >

                Don't have an account? Sign Up

              </Link>


            </Box>




          </Box>



        </Paper>



      </Box>


    </>
  );

}