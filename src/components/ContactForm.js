import React from 'react'
//Styling is handled by ContactForm.css

// NETLIFY CONTACT FORM
function ContactForm() {
  return (
    <div>
      <div className="form">
        <div className="formbox">
          <h1>Contact Form</h1>
          <p>You may contact administrators by completing and submitting this contact form:</p>
          <form name="contact" method="post" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label htmlFor="name">First Name</label> <br />
              <input type="text" id="first_name" name="first_name" required />
            </p>
            <p>
              <label htmlFor="name">Last Name</label> <br />
              <input type="text" id="last_name" name="last_name" required />
            </p>
            <p>
              <label htmlFor="email">Email</label> <br />
              <input type="email" id="email" name="email" required />
            </p>
            <p>
              <label htmlFor="message">Message</label> <br />
              <textarea id="message" name="message" required></textarea>
            </p>
            <p>
              <input type="submit" value="Submit" />
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
