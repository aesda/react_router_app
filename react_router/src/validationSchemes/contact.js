import * as yup from "yup"

const schema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Email address is required').required('Email is required'),
    mobile: yup.string().optional(),
    message: yup.string().required().min(20, 'Message should be atleast 20 characters long').max(100)
  })
  .required()

  export default schema;

