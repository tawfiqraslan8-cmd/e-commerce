import * as React from "react";
import {
  Box,
  Button,
  Checkbox,
  CssBaseline,
  FormControlLabel,
  FormControl,
  TextField,
  Paper,
} from "@mui/material";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FiSun, FiMoon } from "react-icons/fi";
import useThemeStore from "../../store/useThemeStore";


export default function SignUp() {

  const { theme, themeToggle } = useThemeStore();


  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });


  const [errors, setErrors] = useState({});



  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }



  function validate() {

    const err = {};


    if (!form.firstName)
      err.firstName = "First name is required";


    if (!form.lastName)
      err.lastName = "Last name is required";


    if (!form.email.includes("@"))
      err.email = "Invalid email";


    if (form.password.length < 6)
      err.password = "Password must be at least 6 characters";


    if (form.confirmPassword !== form.password)
      err.confirmPassword = "Passwords do not match";


    setErrors(err);


    return Object.keys(err).length === 0;

  }




  function handleSubmit(e) {

    e.preventDefault();


    if (!validate()) return;


    console.log(form);

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

          minHeight:"100vh",

          display:"flex",

          justifyContent:"center",

          alignItems:"center",

          padding:2,

          position:"relative",


          background:

            theme === "dark"

              ? "#212529"

              : "linear-gradient(135deg,#bbdefb,#e3f2fd)",


        }}

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







        <Paper

          elevation={10}

          sx={{


            width:450,


            p:4,


            borderRadius:4,



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

                margin:0,

                fontSize:28

              }}

            >

              Create Account

            </h1>




            <p

              style={{

                marginTop:6,


                color:

                  theme === "dark"

                    ? "#ddd"

                    : "#666"


              }}

            >

              Sign up to get started

            </p>


          </Box>







          <Box component="form" onSubmit={handleSubmit}>


            <FormControl fullWidth sx={{mb:2}}>


              <TextField

                name="firstName"

                label="First Name"

                value={form.firstName}

                onChange={handleChange}

                error={!!errors.firstName}

                helperText={errors.firstName}

                sx={inputStyle}

              />


            </FormControl>






            <FormControl fullWidth sx={{mb:2}}>


              <TextField

                name="lastName"

                label="Last Name"

                value={form.lastName}

                onChange={handleChange}

                error={!!errors.lastName}

                helperText={errors.lastName}

                sx={inputStyle}

              />


            </FormControl>







            <FormControl fullWidth sx={{mb:2}}>


              <TextField

                name="email"

                label="Email"

                value={form.email}

                onChange={handleChange}

                error={!!errors.email}

                helperText={errors.email}

                sx={inputStyle}

              />


            </FormControl>








            <FormControl fullWidth sx={{mb:2}}>


              <TextField

                name="password"

                label="Password"

                type="password"

                value={form.password}

                onChange={handleChange}

                error={!!errors.password}

                helperText={errors.password}

                sx={inputStyle}

              />


            </FormControl>








            <FormControl fullWidth sx={{mb:2}}>


              <TextField

                name="confirmPassword"

                label="Confirm Password"

                type="password"

                value={form.confirmPassword}

                onChange={handleChange}

                error={!!errors.confirmPassword}

                helperText={errors.confirmPassword}

                sx={inputStyle}

              />


            </FormControl>








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


              label="I agree to the terms and conditions"


            />








            <Button


              type="submit"


              variant="contained"


              fullWidth



              sx={{


                mt:2,


                py:1.5,


                borderRadius:2,


                textTransform:"none",


                backgroundColor:"#212529",



                "&:hover":{

                  backgroundColor:"#343a40"

                }


              }}


            >

              Sign Up


            </Button>









            <Box textAlign="center" mt={2}>


              <Link

                to="/signin"


                style={{

                  color:

                    theme === "dark"

                      ? "#fff"

                      : "#000"

                }}

              >

                Already have an account? Sign In


              </Link>


            </Box>





          </Box>





        </Paper>





      </Box>


    </>

  );

}