import { useField } from "formik";
const UseFieldHook = (props) => {
  // it takes 3 field in array but now using only two
  // attributes -> field and errors(extra infos) -> meta
  const [field, meta] = useField(props);
  //   console.log(field);
  return (
    <div>
      <input type="text" {...field} {...props} />
      <span style={{ color: "red" }}>{meta.error}</span>
      <br />
    </div>
  );
};

export default UseFieldHook;
