export default function Validate(values) {
  let errors = {}


  //Validation to check for authenticity of Username
  if (!values.username.trim()) {
    errors.username = 'Username is required';
  };

// Validation to check for entry of Date of birth
if (!values.birth){
  errors.birth = 'Please enter a date'
};


  //validation for Email
  if (!values.email) {
    errors.email = "Email is required";
  } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
    errors.email = 'Email address is invalid';
  };



    //Validation to checkmate phone number authenticity
    if (!values.phone){
      errors.phone = 'please enter a valid phone number';
    } else if (!/^\(?([0-9]{3})\)?[-.]?([0-9]{3})[-.]?([0-9]{5})$/i.test(values.phone)) {
      errors.phone = 'Phone number is invalid'
    };

//Validation logic for password
  if (!values.password) {
    errors.password = 'Password is required';
  } else if(values.password.length < 7) {
    errors.password ='Password needs to be at least seven characters';
  };

//Validation logic for password1
  if (!values.password1) {
    errors.password1 = 'confirmed password is required';
  } else if(values.password1 !== values.password) {
    errors.password1 = 'Passwords do not match'
  };
  return errors;
};