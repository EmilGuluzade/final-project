import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MainContext from "../../../../context/context";
import { useFormik } from "formik";
import loginValidation from "../../../../validations/login.validation";
import { endpoints } from "../../../../services/api/constants";
import controller from "../../../../services/api/requests";
import Swal from "sweetalert2";

const QuickLogin = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate("");

  const { user, logout,login } = useContext(MainContext);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit: async ({ email, password }, actions) => {
      const users = await controller.getAll(endpoints.users);
      const validUser = users.data.find(
        (x) => x.email == email && x.password == password && x.role == "client"
      );

      if (validUser) {
        actions.resetForm();
        login(validUser);
     await  Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Signed up successfully",
          showConfirmButton: false,
          timer: 1000,
        })
          navigate("/");
       
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "email or password is incorrect !",
          showConfirmButton: false,
          timer: 1000,
        });
      }
    },
  });
  return (
    <div
      className={`dropdn-content account-drop quicklogin-wrapper ${
        isOpen ? "is-opened" : "account-close"
      }`}
      id="dropdnAccount"
    >
      <div className="dropdn-content-block">
        <div className="dropdn-close">
          <span onClick={() => setIsOpen(false)} className="js-dropdn-close">
            Close
          </span>
        </div>
        <ul>
          {user.id && (
            <>
              <li>
                <Link
                  onClick={() => {
                    setIsOpen(false);
                    logout();
                    
                  }}
                  to="/login"
                >
                  <span>Log out</span>
                  <i className="fa-thin fa-right-to-bracket icon-login"></i>
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/checkout">
                  <span>Checkout</span>
                  <i className="fa-regular fa-credit-card icon-card"></i>
                </Link>
              </li>
            </>
          )}
          {!user.id && (
            <>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/login">
                  <span>Log In</span>
                  <i className="fa-thin fa-right-to-bracket icon-login"></i>
                </Link>
              </li>
              <li>
                <Link onClick={() => setIsOpen(false)} to="/register">
                  <span>Register</span>
                  <i className="fa-regular fa-user icon-user2"></i>
                </Link>
              </li>
            </>
          )}
        </ul>
        {!user.id && (
          <div className="dropdn-form-wrapper">
            <h5>Quick Login</h5>
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
                  <small style={{ color: "red" }}>
                    {formik.errors.password}
                  </small>
                )}
              </div>
              <button
                onClick={() => setIsOpen(false)}
                type="submit"
                className="btn"
              >
                Enter
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuickLogin;
