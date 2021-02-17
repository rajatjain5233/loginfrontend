import React from 'react';
import {useState} from 'react';
const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      console.log(event);
      debugger
      // let firstName=event.target[0].value;
      let email=event.target[2].value;
      let password=event.target[3].value;

      const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, password: password })
      };
      fetch('http://localhost:5001/api/register', requestOptions)
        .then(response => response.json())
        .then((response)=>{
            
        });
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export default useSignUpForm;