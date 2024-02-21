// TODO: fourth step 4️⃣ importing yup library for form validation
import { number, object, string } from "yup";
const FormValidation = () => {
  // TODO: second step2️⃣ handleSubmit function
  const handleSubmit = async (event) => {
    event.preventDefault(); //-> preventing auto refreshing after clicking in submit button
    // console.log(event.target); // prints form
    // console.log(event.target[0]); // prints email, similarly it prints others too with indexing

    // TODO: step-five 5️⃣
    // imported object
    const contactFormSchema = object({
      //string is automatically imported
      email: string().required().email(),
      password: string().required().min(6).max(25),
      address: string().required().min(4),
      // number is also automatically imported
      contact: number().positive().required(),
    });

    // TODO: third step3️⃣ formData-> taking from Form to store in an object
    const formData = {
      email: event.target[0].value,
      password: event.target[1].value,
      address: event.target[2].value,
      contact: event.target[3].value,
    };
    // console.log(formData);
    //TODO: step-6 6️⃣ isValid (valid or not) and async and await added to resolve promise
    const isValid = await contactFormSchema.isValid(formData); //-> isValid() -> return type 'Promise(<boolean>)'
    console.log(isValid);

    console.log("Form submitted");
  };
  return (
    // TODO: first step 1️⃣
    <div>
      {/* autoComplete = off to not to show previous data in the txt field */}
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="email" />
        <br />
        <input type="text" name="password" />
        <br />
        <input type="text" name="address" />
        <br />
        <input type="text" name="contact" />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default FormValidation;
