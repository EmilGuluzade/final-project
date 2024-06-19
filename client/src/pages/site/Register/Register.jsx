import React, { useState } from "react";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import User from "../../../classes/User";
import userValidation from "../../../validations/user.validation";
import Swal from "sweetalert2";
import { endpoints } from "../../../services/api/constants";
import controller from "../../../services/api/requests";

const Register = () => {
  const navigate = useNavigate("");
const [image,setImage]=useState(null)

const  handleImageChange=(e,setFieldValue)=> {
  const file=e.currentTarget.files[0]
  setImage(file)
  setFieldValue("src",file)
}

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
      const formData = new FormData();
      
      const newUser = new User(username, email, password, src);
    
      formData.append("src", newUser.src);
      formData.append("username", newUser.username);
      formData.append("password", newUser.password);
      formData.append("email", newUser.email);

      formData.append("role", "client");
      formData.append("banDate", newUser.banDate);
      formData.append("banCount", newUser.banCount);
      formData.append("isBanned", newUser.isBanned);
      
      
      const response = await controller.post(endpoints.users, formData);
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
    },
  });

  return (
    <div className="page-content" style={{ minHeight: "1.8px" }}>
      <div className="holder">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-18 col-lg-6">
              <h2 className="text-center">Create an Account</h2>
              <div className="form-wrapper">
                <form encType="multipart/form-data"  onSubmit={formik.handleSubmit}>
                  <div className="row">
                    <div className="">
                      <div className="form-group">
                        <label htmlFor="username">Name</label>

                        <input
                          type="text"
                          className="form-control"
                          placeholder="User name"
                          name="username"
                          id="username"
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
                        <label htmlFor="src">Profile Image</label>
                        <input
                          type="file"
                          className="form-control"
                          placeholder="Image url"
                          name="src"
                          id="src"
                          onChange={(e)=>{
                         handleImageChange(e,formik.setFieldValue)   
                          }}
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
                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>

                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                      name="confirmPassword"
                      id="confirmPassword"
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
