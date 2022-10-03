export default function Validate(values) {
  let errors = {}

  if (!values.username.trim()) {
    errors.username = 'Username required';
  }

  //validation for Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  }

//Validation logic for password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if(values.password.length < 7) {
    errors.password ='Password needs to be at least seven(7) characters or more';
  }

//Validation logic for password1
  if (!values.password1) {
    errors.password1 = 'Password is required';
  } else if(!values.password1 !== values.password) {
    errors.password1 = 'Passwords do not match. Please check again';
  };

  console.log(errors)
  return errors;
}