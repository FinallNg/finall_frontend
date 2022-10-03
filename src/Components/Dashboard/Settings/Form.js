import { useState, useEffect } from 'react'

const Form = Validate => {
  
 const {values, setValues} = useState({
   profile: '',
   username: '',
   last: '',
   gender: '',
   birth: '',
   email: '',
   phone: '',
  password: '',
  password1: '',
  currency: '',
 });



const {errors,setErrors} = useState({});



const handleChange = e =>{
  console.log(setValues)
  const { name, value} = e.target
 setValues({
 ...values,
[name]: value
});
};




const handleSubmit = (e) => {
  e.preventDefault();

  setErrors(Validate(values));
};



return{ handleChange , values, handleSubmit, errors };
};

export default Form;