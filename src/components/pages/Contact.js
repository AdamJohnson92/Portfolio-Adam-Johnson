import React, { useState } from "react";

export default function Contact() {

  const [inputs, setInputs] = useState({})

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value
    setInputs(values => ({ ...values, [name]: value }))

  }

  const handleSubmit = (event) => {
    const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)

    const emailCheck = validEmailRegex.test(inputs.email)
    console.log(emailCheck)
    if (emailCheck===false) {
      window.alert('Not a valid email address')
    } 
    if (!inputs.name || !inputs.email || !inputs.message) {
      window.alert('All three fields must be complete.')
    }
    event.preventDefault()
    console.log(inputs.name)
  }

  return (
    <div className='body-content'>
      <h3>Contact Adam</h3>
      <form className="contact-form" action="mailto:adamgjohnson92@gmail.com" method="POST" encType="text/plain">
        <label className='form-label' htmlFor='name'>Name:
          <input className='form-box' type='text' name='name' value={inputs.name || ''} onChange={handleInputChange}></input></label>

        <label className='form-label' htmlFor='email'>Email:
          <input className='form-box' type='text' name='email' value={inputs.email || ''} onChange={handleInputChange}></input></label>

        <label className='form-label' htmlFor='message'>Message</label>
        <textarea className='form-box' id='message-box' type='text' name='message' value={inputs.message || ''} onChange={handleInputChange}></textarea>

        <input className='btn' type='submit' value='Send' onClick={handleSubmit} />
      </form>
    </div>
  );
}