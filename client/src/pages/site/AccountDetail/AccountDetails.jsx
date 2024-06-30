import React, { useContext, useEffect, useState } from "react";
import MainContext from "../../../context/context";
import controller from "../../../services/api/requests";
import { endpoints } from "../../../services/api/constants";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const AccountDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [userInfo, setUserinfo] = useState({});
  const { user } = useContext(MainContext);
  const [updateUsers, setUpdateUsers] = useState({});
  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const navigate = useNavigate("");

  useEffect(() => {
    async function getUser() {
      const response = await controller.getOne(endpoints.users, user.id);
      setUserinfo(response.data);
      setUpdateUsers(response.data);
    }
    getUser();
  }, [updateUsers]);

  const formik = useFormik({
    initialValues: {
      username: updateUsers?.username || "",
      email: updateUsers?.email || "",
      src: null, // Initialize src as null for file input
    },
    enableReinitialize: true,
    onSubmit: async (values, actions) => {
      const formData = new FormData();
      formData.append("username", values.username);
      formData.append("email", values.email);
      if (values.src) {
        formData.append("src", values.src);
      }

      const response = await controller.patch(
        endpoints.users,
        user.id,
        formData
      );

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Updated",
        showConfirmButton: false,
        timer: 1000,
      }).then(() => {
        setShowForm(false);
       
      });
 navigate("/accountdetails");
      setUserinfo(response.data);

      actions.resetForm();
    },
  });
  const passwordFormik = useFormik({
    initialValues: {
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (!values.currentPassword) {
        errors.currentPassword = "Required";
      }
      if (!values.newPassword) {
        errors.newPassword = "Required";
      }
      if (values.newPassword !== values.confirmPassword) {
        errors.confirmPassword = "Passwords must match";
      }
      return errors;
    },
    onSubmit: async (values, actions) => {
      const response = await controller.patch(
        `/users/password`,user.id,
        {
          currentPassword: values.currentPassword,
          newPassword: values.newPassword,
        }
      );

 
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: response.message,
          showConfirmButton: false,
          timer: 1000,
        }).then(() => {
          setShowPasswordForm(false);
        });
    

      actions.resetForm();
    },
  });
  return (
    <div className="holder">
      <Helmet>
        <title>AccountDetails</title>
      </Helmet>
      <div className="container">
        <div className="row">
          <div className="col-3 aside aside--left">
            <div className="list-group">
              <Link to="/accountdetails" className="list-group-item active">
                Account Details
              </Link>
              <Link to="/wishlist" className="list-group-item">
                My Wishlist
              </Link>
              <Link to="/order" className="list-group-item">
                My Order History
              </Link>
            </div>
          </div>
          <div className="col-5 aside">
            <h1 className="mb-3">Account Details</h1>
            <div className="row vert-margin">
              <div className="col-sm-9">
                <div className="card">
                  <div className="card-body">
                    <h3>Personal Info</h3>
                    <b>Name:</b> {userInfo.username}
                    <br />
                    <b>E-mail:</b> {userInfo.email}
                    <br />
                    <b>Role:</b> {userInfo.role}
                    <br />
                    <b>Ban Count:</b> {userInfo.banCount}
                    <br />
                    <b>Created At:</b> {userInfo.createdAt}
                    <br />
                    <div className="mt-2 clearfix">
                      <a
                        href="#"
                        className="link-icn"
                        onClick={() => setShowForm(true)}
                      >
                        {" "}
                        Edit
                        <i className="fa-thin fa-user-pen icon-pencil mx-2"></i>
                      </a>
                    </div>
                    <div className="mt-2 clearfix">
                      <a
                        href="#"
                        className="link-icn"
                        onClick={() => setShowPasswordForm(true)}
                      >
                        {" "}
                        Change Password<i className="fa-thin fa-key icon-pencil mx-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {showForm && (
              <div className="card mt-3" id="updateDetails">
                <div className="card-body">
                  <h3>Update Account Details</h3>
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row mt-2">
                      <div className="col-sm-9">
                        <label className="text-uppercase">New Name:</label>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control form-control--sm"
                            name="username"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                            placeholder={user.username}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-sm-9">
                        <label className="text-uppercase">New E-mail:</label>
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control--sm"
                            name="email"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            placeholder={user.email}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-sm-9">
                        <label className="text-uppercase">New Avatar:</label>
                        <div className="form-group">
                          <input
                            type="file"
                            className="form-control"
                            name="src"
                            onChange={(event) => {
                              formik.setFieldValue(
                                "src",
                                event.currentTarget.files[0]
                              );
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
                    <div className="mt-2">
                      <button
                        type="button"
                        className="btn btn--alt mx-3"
                        onClick={() => setShowForm(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn ml-1">
                        Update
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
            {showPasswordForm && (
              <div className="card mt-3" id="changePassword">
                <div className="card-body">
                  <h3>Change Password</h3>
                  <form onSubmit={passwordFormik.handleSubmit}>
                    <div className="row mt-2">
                      <div className="col-sm-9">
                        <label className="text-uppercase">Current Password:</label>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control--sm"
                            name="currentPassword"
                            onChange={passwordFormik.handleChange}
                            onBlur={passwordFormik.handleBlur}
                            value={passwordFormik.values.currentPassword}
                          />
                          {passwordFormik.touched.currentPassword && passwordFormik.errors.currentPassword && (
                            <small style={{ color: "red" }}>
                              {passwordFormik.errors.currentPassword}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-sm-9">
                        <label className="text-uppercase">New Password:</label>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control--sm"
                            name="newPassword"
                            onChange={passwordFormik.handleChange}
                            onBlur={passwordFormik.handleBlur}
                            value={passwordFormik.values.newPassword}
                          />
                          {passwordFormik.touched.newPassword && passwordFormik.errors.newPassword && (
                            <small style={{ color: "red" }}>
                              {passwordFormik.errors.newPassword}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-sm-9">
                        <label className="text-uppercase">Confirm New Password:</label>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control--sm"
                            name="confirmPassword"
                            onChange={passwordFormik.handleChange}
                            onBlur={passwordFormik.handleBlur}
                            value={passwordFormik.values.confirmPassword}
                          />
                          {passwordFormik.touched.confirmPassword && passwordFormik.errors.confirmPassword && (
                            <small style={{ color: "red" }}>
                              {passwordFormik.errors.confirmPassword}
                            </small>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <button
                        type="button"
                        className="btn btn--alt mx-3"
                        onClick={() => setShowPasswordForm(false)}
                      >
                        Cancel
                      </button>
                      <button type="submit" className="btn ml-1">
                        Change Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
          <div className="col-4 aside">
            <img
              src={userInfo.src}
              alt=""
              style={{
                width: "300px",
                height: "300px",
                borderRadius: "50%",
                objectFit: "cover",
                objectPosition: "top",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;
