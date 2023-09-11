import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

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
    if (emailCheck === false) {
      window.alert('Not a valid email address')
    }
    if (!inputs.name || !inputs.email || !inputs.message) {
      window.alert('All three fields must be complete.')
    }
    event.preventDefault()


    window.alert('Thank you for reaching out!')
    setInputs(inputs.name = '', inputs.email = '', inputs.message = '')

  }

  return (
    <div className='body-content'>
      <h3>Contact Adam</h3>
      <p>Email: adamgjohnson92@gmail.com</p>
      <p>Phone: 480-421-8720</p>
      <form className="contact-form" action="mailto:adamgjohnson92@gmail.com" method="POST" encType="text/plain">
        <a className="tool-tip">
          <label className='form-label' htmlFor='name'>Name:
            <input className='form-box' type='text' name='name' value={inputs.name || ''} onChange={handleInputChange}></input><Tooltip anchorSelect=".tool-tip" place='top'>This is a required field.</Tooltip>
          </label>
        </a>

        <a className="tool-tip">
          <label className='form-label' htmlFor='email'>Email:
            <input className='form-box' type='text' name='email' value={inputs.email || ''} onChange={handleInputChange}></input><Tooltip anchorSelect=".tool-tip" place='top'>This is a required field.</Tooltip>
          </label>
        </a>

        <a className="tool-tip">
          <label className='form-label' htmlFor='message'>Message :
          <textarea className='form-box' id='message-box' type='text' name='message' value={inputs.message || ''} onChange={handleInputChange}><Tooltip anchorSelect=".tool-tip" place='top'>This is a required field.</Tooltip></textarea></label>
          
        </a>

        <input className='btn' type='submit' value='Send' onClick={handleSubmit}
        />


      </form>
    </div>
  );
}