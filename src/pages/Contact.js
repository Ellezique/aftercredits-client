import React from 'react'
//import React, { useState, useEffect } from "react";
import BingMapsReact from "bingmaps-react";
import './Contact.css'
// require('dotenv').config()


function Contact() {
let center = { latitude: -27.468150020880756, longitude: 153.02513165952453 }
  return (
    <div>
      <h1>CONTACT PAGE</h1>
      <h3 class="address">AfterCredits Head Office</h3>
      <p class="address">Level 3/116 Adelaide St, Brisbane City QLD 4000</p>
      <p class="address">Brisbane City</p>
      <p class="address">QLD 4000</p>
      {/* Bing Maps for react: https://www.npmjs.com/package/bingmaps-react */}
      {/* https://docs.microsoft.com/en-us/bingmaps/v8-web-control/map-control-concepts/pushpins/default-pushpin-with-text-example */}
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
        
        
        pushPins = {[
            {center},
          //   {
          //     title: 'AfterCredits',
          //     subTitle: '(Actually Coder Academy)',
          //    }
        ]}

        // pushPinsWithInfoboxes ={[
        //   title: 'AfterCredits',
        //     description: '(Actually Coder Academy)',
        // ]}
      />
    </div>
  );
}

export default Contact
