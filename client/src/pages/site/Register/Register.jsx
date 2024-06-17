import React from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import User from "../../../classes/User";
import userValidation from "../../../validations/user.validation";
import Swal from "sweetalert2";
import { endpoints } from "../../../services/api/constants";
import controller from "../../../services/api/requests";

const Register = () => {
  const navigate = useNavigate("");

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      src: "",
    },
    validationSchema: userValidation,
    onSubmit: async ({ username, email, password, src }, actions) => {
      const newUser = new User(username, email, password, src);
      const response = await controller.post(endpoints.users, newUser);
      actions.resetForm();
    
      if (response.error) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
        });
      } else {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signed up successfully",
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          navigate("/login"); 
        });
      }
    }
  });

  return (
    <div className="page-content" style={{ minHeight: "1.8px" }}>
      <div className="holder">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-18 col-lg-6">
              <h2 className="text-center">Create an Account</h2>
              <div className="form-wrapper">
                <form onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="User name"
                          name="username"
                          value={formik.values.username}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.username && formik.errors.username && (
                          <small style={{ color: "red" }}>
                            {formik.errors.username}
                          </small>
                        )}
                      </div>
                    </div>
                    <div className="">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Image url"
                          name="src"
                          value={formik.values.src}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.src && formik.errors.src && (
                          <small style={{ color: "red" }}>
                            {formik.errors.src}
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
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
                      <small style={{ color: "red" }}>
                        {formik.errors.email}
                      </small>
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
                      <small style={{ color: "red" }}>
                        {formik.errors.password}
                      </small>
                    )}
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      value={formik.values.confirmPassword}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmPassword &&
                      formik.errors.confirmPassword && (
                        <small style={{ color: "red" }}>
                          {formik.errors.confirmPassword}
                        </small>
                      )}
                  </div>
                  <Link to="/login">Already have an account?</Link>
                  <div className="text-center">
                    <input
                      className="btn"
                      type="submit"
                      value={"Create Account"}
                    />
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

export default Register;
