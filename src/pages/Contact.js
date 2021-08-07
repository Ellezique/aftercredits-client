import React from 'react'
import './Contact.css'
import Map from '../components/Map'
import '../components/Map.css'
import ContactForm from '../components/ContactForm'
import '../components/ContactForm.css'

function Contact() {

  return (
    <div>
      <video src='https://res.cloudinary.com/ellezique/video/upload/v1628310794/background_sgqbly.mp4'autoPlay loop muted/>
      <ContactForm></ContactForm>
      <br></br>
  
      <Map></Map>
      <div className="credits">
        <h1>Project Built By:</h1>
        <h4>Gizelle</h4>
        <a className="hyperlink" href="https://github.com/Ellezique" target="_blank" rel="noreferrer">
          https://github.com/Ellezique
        </a>
        <br></br>
        <h4>Chris</h4>
        <a className="hyperlink" href="https://github.com/chris-gibs" target="_blank" rel="noreferrer">
          https://github.com/chris-gibs
        </a>
        <h1>Background Credit:</h1>
        <a className="hyperlink" href="https://www.youtube.com/watch?v=NlZMXbJ84YQ" target="_blank" rel="noreferrer">
          Mikhail Gorbunov, Motion Designer
        </a>
      </div>
    </div>
  );
}

export default Contact