import React, { useContext } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { endpoints } from "../../../services/api/constants";
import controller from "../../../services/api/requests";
import loginValidation from "../../../validations/login.validation";
import MainContext from "../../../context/context";

const Login = () => {
  const { login } = useContext(MainContext);
  const navigate = useNavigate("");

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async ({ email, password }, actions) => {
      try {
        const users = await controller.getAll(endpoints.users);
        const validUser = users.data.find(
          (x) => x.email === email && x.password === password && x.role === "client"
        );

        if (validUser) {
          actions.resetForm();
          login(validUser);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Signed in successfully",
            showConfirmButton: false,
            timer: 1000,
          }).then(() => {
            e.preventDefault()
            navigate("/");
          });
        } else {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Email or password is incorrect!",
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

  return (
    <div className="page-content" style={{ minHeight: "1.8px" }}>
      <div className="holder">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <h2 className="text-center">Login</h2>
              <div className="form-wrapper">
                <form onSubmit={formik.handleSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="E-mail"
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <small style={{ color: "red" }}>{formik.errors.email}</small>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.password && formik.errors.password && (
                      <small style={{ color: "red" }}>{formik.errors.password}</small>
                    )}
                  </div>
                  <Link to="/register">Don't have an account?</Link>
                  <div className="text-center">
                    <button className="btn" type="submit">
                      Login
                    </button>
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
