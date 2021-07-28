import React from 'react'
import BingMapsReact from "bingmaps-react";
// import './Contact.css'
// require('dotenv').config()

console.log (process.env) 

function Contact() {
 
  return (
    <div>
      <h1>CONTACT PAGE</h1>
      <h1>Address goes here</h1>
      {/* Bing Maps for react */}
      <BingMapsReact
        bingMapsKey = {process.env.REACT_APP_BING_API_KEY}
        height="500px"
        mapOptions={{
          navigationBarMode: "square",
          disableScrollWheelZoom: true,
          disablePanning: true,
        }}
        max-width="100%"
        viewOptions={{
          center: { latitude: -27.468150020880756, longitude: 153.02513165952453 },
          mapTypeId: "road",
          zoom: 15,
        }}
      />
    </div>
  );
}

export default Contact
