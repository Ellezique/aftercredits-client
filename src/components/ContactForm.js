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
            <h3>
              <label htmlFor="name">First Name</label> <br />
              <input type="text" id="first_name" name="first_name" required />
            </h3>
            <h3>
              <label htmlFor="name">Last Name</label> <br />
              <input type="text" id="last_name" name="last_name" required />
            </h3>
            <h3>
              <label htmlFor="email">Email</label> <br />
              <input type="email" id="email" name="email" required />
            </h3>
            <h3>
              <label htmlFor="message">Message</label> <br />
              <textarea id="message" name="message" required></textarea>
            </h3>
            <h3>
              <input type="submit" value="Submit" />
            </h3>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
