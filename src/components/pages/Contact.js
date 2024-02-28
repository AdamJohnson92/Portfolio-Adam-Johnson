import React, { useState } from "react";
import { Tooltip } from "react-tooltip";

export default function Contact() {

  const [nameForm, setNameForm] = useState('')
  const [emailForm, setEmailForm] = useState('')
  const [messageForm, setMessageForm] = useState('')


  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value


    if (inputName === 'name') {
      setNameForm(inputValue)
      console.log(inputValue)
    } else if (inputName === 'email') {
      setEmailForm(inputValue)
      console.log(inputValue)
    } else if (inputName === 'message') {
      setMessageForm(inputValue)
      console.log(inputValue)
    }
  }



  const handleSubmit = (event) => {
    const validEmailRegex = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/)

    const emailCheck = validEmailRegex.test(emailForm)
    if (emailCheck === false) {
      window.alert('Not a valid email address')
    }
    if (!nameForm || !emailForm || !messageForm) {
      window.alert('All three fields must be complete.')
    }
    event.preventDefault()

    if (emailCheck === true && nameForm && emailForm && messageForm) {
      window.alert('Thank you for reaching out!')
      setNameForm('')
      setEmailForm('')
      setMessageForm('')
    }
  }

  return (
    <div className='body-content text-green'>
      <h3>Contact Adam</h3>
      <h4 className="contact-item">Email: adamgjohnson92@gmail.com</h4>
      <h4 className="contact-item">Phone: 480-421-8720</h4>
      <h4 className="contact-item">
        <a className="text-green body-link" href="https://www.linkedin.com/in/adam-johnson-61769b21a/">LinkedIn</a>
      </h4>
      <h4 className="contact-item">
        <a className="text-green body-link" href="https://github.com/AdamJohnson92">GitHub</a>
      </h4>

      {/* <h3>Send Adam a Message</h3>
      <form className="contact-form" action="mailto:adamgjohnson92@gmail.com" method="POST" encType="text/plain">
        <a className="tool-tip">
          <label className='form-label' htmlFor='name'>Name:
            <input className='form-box' type='text' name='name' value={nameForm || ''} onChange={handleInputChange}></input><Tooltip anchorSelect=".tool-tip" place='top'>This is a required field.</Tooltip>
          </label>
        </a>

        <a className="tool-tip">
          <label className='form-label' htmlFor='email'>Email:
            <input className='form-box' type='text' name='email' value={emailForm || ''} onChange={handleInputChange}></input><Tooltip anchorSelect=".tool-tip" place='top'>This is a required field.</Tooltip>
          </label>
        </a>

        <a className="tool-tip">
          <label className='form-label' htmlFor='message'>Message :
            <textarea className='form-box' id='message-box' type='text' name='message' value={messageForm || ''} onChange={handleInputChange}><Tooltip anchorSelect=".tool-tip" place='top'>This is a required field.</Tooltip></textarea></label>

        </a>

        <input className='btn' type='submit' value='Send' onClick={handleSubmit}
        />


      </form> */}
    </div>
  );
}