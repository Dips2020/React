import { Formik } from "formik";
// import { object, string } from "yup";
import UserLoginSchema from "./validation_schemas/UserLoginSchema";
import UseFieldHook from "./UseFieldHook";
const FormikFormValidation = () => {
  //
  // for this⬇️ creating UserLoginSchema and importing here
  // const userLoginSchema = object({
  //   // custom message
  //   email: string()
  //     .email("Email must be a valid one.")
  //     .required("Email chahiyo haii."),
  //   password: string()
  //     .required("password pani chahinxa haii")
  //     .min(4, "Minimum password length should be of 4 characters")
  //     .max(30, "Maximum is 30 characters"),
  // });
  //
  return (
    <div>
      {/* initial values  */}
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(data) => {
          console.log(data);
          console.log("Form submitted.");
        }}
        // validationSchema={userLoginSchema}
        validationSchema={UserLoginSchema} // importing UserLoginSchema
      >
        {/* errors,handleChange, handleSubmit, values  */}
        {/* {(props) => { */}

        {/* Destructuring props*/}
        {({ handleSubmit }) => {
          // {({ errors, handleChange, handleSubmit, values }) => {

          // console.log(props);
          // console.log(values);
          return (
            // inside form -> name is compulsory in Formik
            <form onSubmit={handleSubmit}>
              <label>Email</label>
              {/* <input
                type="text"
                name="email"
                onChange={handleChange}
                value={values.email}
              />
              {errors.email}
              <br /> */}
              {/* importing shorthand of above input field */}
              <UseFieldHook
                name="email"
                placeholder="Email address"
                autoComplete="username"
              />
              {/*  */}
              {/* <input
                type="password"
                name="password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password}
              <br /> */}
              <label>Password</label>
              <UseFieldHook
                type="password"
                name="password"
                autoComplete="current-password"
                placeholder="password"
              />
              <input type="submit" />
            </form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikFormValidation;
