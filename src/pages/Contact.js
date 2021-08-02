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
      <Map></Map>
      <div className = "credits">
        <h1>Project Build By:</h1>
        <h4>Gizelle</h4>
        <a className="GitHub" href="https://github.com/Ellezique">
            https://github.com/Ellezique
        </a>
        <h4>Chris</h4>
        <a className="GitHub" href="https://github.com/chris-gibs">
        https://github.com/chris-gibs
        </a>
      </div>
    </>
  );
}

export default Contact

