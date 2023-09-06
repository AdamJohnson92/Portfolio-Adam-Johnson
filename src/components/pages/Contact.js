import React, { useState } from "react";

export default function Contact() {

  const [inputs, setInputs] = useState({})
  

  const handleSubmit = (event) => {
    // if (!'name' || !'email' || !'message' ) {
    //   window.alert('All three fields must be complete.')
    // }
    event.preventDefault()
    console.log(inputs)
  }

  return (
    <div>
      <h3>Contact Adam</h3>
      <form className="contact-form">
        <label className='form-label' htmlFor='name'>Name:
        <input className='form-box' type='text' name='name' value={inputs.name}></input></label>
        
        <label className='form-label' htmlFor='email'>Email: 
        <input className='form-box' type='text' name='email' value={inputs.email}></input></label>
       
        <label className='form-label' htmlFor='message'>Message</label>
        <textarea className='form-box' id='message-box' type='text' name='message' value={inputs.message}></textarea>

        <input className='btn' type='submit' value='Submit' onClick={handleSubmit} />
      </form>
    </div>
  );
}