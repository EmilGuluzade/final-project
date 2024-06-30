  // Login componentine Google OAuth butonu ekleyelim
  import React, { useContext } from "react";
  import { useFormik } from "formik";
  import { Link, useNavigate } from "react-router-dom";
  import Swal from "sweetalert2";
  import { endpoints } from "../../../services/api/constants";
  import controller from "../../../services/api/requests";
  import loginValidation from "../../../validations/login.validation";
  import MainContext from "../../../context/context";
  import Cookies from "js-cookie";
  import { Helmet } from "react-helmet-async";
  import axios from "axios";
import GoogleButton from 'react-google-button'
  const Login = () => {
    const { login,getUser } = useContext(MainContext);
    const navigate = useNavigate();
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: loginValidation,
      onSubmit: async ({ email, password }, actions) => {
        try {
          const response = await controller.post("/login", {
            email: email,
            password: password,
          });

          if (response.auth) {
            actions.resetForm();
            login(response.user);

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: response.message,
              showConfirmButton: false,
              timer: 1000,
            });
            
            if (response.user.role === "client") {
              navigate("/");
            } else {
              navigate("/admin");
            }
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: response.message,
              showConfirmButton: false,
              timer: 1000,
            });
          }
        } catch (error) {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something went wrong!",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      },
    });

    const handleGoogleLogin =async  () => {
      // Google OAuth ile giriş yapmak için yönlendirme sağlayacağız
      window.location.href = 'http://localhost:8080/api/users/auth/google'
      // getUser()
      
    };
  
    return (
      <div className="page-content" style={{ minHeight: "1.8px" }}>
      <Helmet>
          <title> Login  </title>
        </Helmet>
        <div className="holder">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8 col-lg-6">
                <h2 className="text-center">Login</h2>
                <div className="form-wrapper">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>

                      <input
                        type="text"
                        className="form-control"
                        placeholder="E-mail"
                        name="email"
                        id="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.email && formik.errors.email && (
                        <small style={{ color: "red" }}>
                          {formik.errors.email}
                        </small>
                      )}
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>

                      <input
                        type="password"
                        className="form-control"
                        placeholder="Password"
                        name="password"
                        id="password"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.touched.password && formik.errors.password && (
                        <small style={{ color: "red" }}>
                          {formik.errors.password}
                        </small>
                      )}
                    </div>
                    <Link to="/register">Don't have an account?</Link>
                    <div className="text-center d-flex flex-column align-items-center ">

                      <button className="btn" type="submit">
                        Sigh in 
                      </button>
                     {/* <div className="or">
                      or
                     </div>
                      <GoogleButton
  onClick={ ()=>{
  handleGoogleLogin()
  }}
/> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default Login;
