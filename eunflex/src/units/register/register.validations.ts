import * as yup from "yup";

export const schema = yup.object().shape({
  email: yup.string().email().required("Please enter correct email"),
  password: yup
    .string()
    .min(3)
    .max(10)
    .required("Please enter correct password"),
});
