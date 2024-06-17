import * as Yup from "yup";

const loginValidation = Yup.object().shape({
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      "Password must contain at least one letter, one number, and be at least 8 characters long"
    )
    .required(),
  email: Yup.string().email("Must be a valid email").required("Email is required")
});

export default loginValidation;