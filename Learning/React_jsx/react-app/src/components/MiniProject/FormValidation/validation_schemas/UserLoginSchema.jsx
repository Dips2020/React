import { object, string } from "yup";

const validationSchema = object({
  // custom message
  email: string()
    .email("Email must be a valid one.")
    .required("Email chahiyo haii."),
  password: string()
    .required("password pani chahinxa haii")
    .min(4, "Minimum password length should be of 4 characters")
    .max(30, "Maximum is 30 characters"),
});
export default validationSchema;
