import React from 'react';
import useSignUpForm from './CustomHooks';


const Signup = () => {
	const signup = () => {
	    alert(`User Created!
         Name: ${inputs.firstName} ${inputs.lastName}
         Email: ${inputs.email}`);
	}
	const {inputs, handleInputChange, handleSubmit} = useSignUpForm(signup);
    
	

  return (
    <form onSubmit={handleSubmit}>
	 
	  <div>
	    <label>Email Address</label>
	    <input type="email" name="email" onChange={handleInputChange} value={inputs.email} required />
	  </div>
	  <div>
	    <label>Password</label>
	    <input type="password" name="password1" onChange={handleInputChange} value={inputs.password1}/>
	  </div>
	  <button type="submit">Login</button>
	</form>
  )
}
export default Signup;