import * as yup from "yup"

const schema = yup
  .object({
    firstName: yup.string().required('First name is required'),
    lastName: yup.string().required('Last name is required'),
    email: yup.string().email('Email address is required').required('Email is required'),
    phone: yup.string().optional(),
    projectDetails: yup.string().required('Project Details is required').min(20, 'Project Details should be atleast 20 characters long').max(100)
    

    

  })
  .required()

  export default schema;