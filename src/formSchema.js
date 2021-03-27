import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("name is required")
    .min(2, "name must be 2 chars long"),
  email: yup
    .string()
    .email("must be a valid email")
    .required("email is required"),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  mushroom: yup.boolean(),
});
