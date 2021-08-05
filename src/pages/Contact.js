import React from 'react'
import './Contact.css'
import Map from '../components/Map'
import '../components/Map.css'
import ContactForm from '../components/ContactForm'
import '../components/ContactForm.css'

function Contact() {

  return (
    <>
      <ContactForm></ContactForm>
      <br></br>
      
      <Map></Map>
      <div className="credits">
        <h1>Project Built By:</h1>
        <h4>Gizelle</h4>
        <a className="hyperlink" href="https://github.com/Ellezique" target="_blank" rel="noreferrer">
          https://github.com/Ellezique
        </a>
        <h4>Chris</h4>
        <a className="hyperlink" href="https://github.com/chris-gibs" target="_blank" rel="noreferrer">
          https://github.com/chris-gibs
        </a>
      </div>
    </>
  );
}

export default Contact

