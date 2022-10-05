import React from 'react'
import { useState, useEffect} from 'react'

const Form = () => {
  const {values, setValues} = useState({
   first: '',
   profile: '',
   last: '',
   sex: '',
   birth: '',
   email: '',
   phone: '',
   currency: '',
   password: '',
   password2: '',
  })

  const {errors,setErrors} = useState({})



  const handleChange = e =>{
    setValues({
      ...values,
      e.target.name
    })
  }



  return (
    <div>Form</div>
  )
}

export default Form