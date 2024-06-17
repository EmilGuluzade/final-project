import * as Yup from "yup";

const userValidation = Yup.object().shape({
  username: Yup.string().min(2).required(),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one letter, one number, and be at least 8 characters long"
    )
    .required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  src: Yup.string().url("Must be a valid URL").required("Image URL is required"),
  email: Yup.string().email("Must be a valid email").required("Email is required"),
  role: Yup.string().oneOf(["client"]),
});

export default userValidation;