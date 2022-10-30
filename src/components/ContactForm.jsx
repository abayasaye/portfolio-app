import './ContactFormStyles.css'

import React from 'react'

const ContactForm = () => {
  return (
    <div className='form'>
        <form action="mailto:info@w3docs.com" method="get" enctype="text/plain">
            <label>Your Name</label>
            <input type="text" />
            <label>Email</label>
            <input type="email" />
            <label>Subject</label>
            <input type="text" />
            <label>Message</label>
            <textarea  rows="6" placeholder='Type your message here!'/>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default ContactForm