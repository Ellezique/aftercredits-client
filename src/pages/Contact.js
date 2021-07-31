import React from 'react'
import BingMapsReact from "bingmaps-react";
import './Contact.css'

function Contact() {

  let center = { latitude: -27.468150020880756, longitude: 153.02513165952453 }


  return (
    <div>
      <h1>CONTACT PAGE</h1>
      <h3 class="address">AfterCredits Head Office</h3>
      <p class="address">Level 3/116 Adelaide St, Brisbane City QLD 4000</p>
      <p class="address">Brisbane City</p>
      <p class="address">QLD 4000</p>
      <BingMapsReact
        bingMapsKey = {process.env.REACT_APP_BING_API_KEY}
        height="500px"
        mapOptions={{
          navigationBarMode: "square",
          disableScrollWheelZoom: true,
          // disablePanning: true,
          showBreadcrumb: true, //The breadcrumb control shows the current center location’s geography hierarchy. Australia > QLD > Brisbane City
          showLocateMeButton: true,
          showScalebar: true, //A boolean value indicating whether to show the scale bar. 
          showZoomButtons: true, //how the zoom buttons in the map navigation control.
        }}
        
        max-width="100%"
        viewOptions={{
          center: center,
          mapTypeId: "road", //default loads road map. arial and bird's eye view are still selectable options
          zoom: 15, 
        }} 
        
        pushPinsWithInfoboxes ={[
          {center, metadata: {title: "AfterCredits", description: "Level 3/116 Adelaide St, <br> Brisbane City <br> QLD 4000"}}
      ]}
       
     ></BingMapsReact>
    </div>
  );
}

export default Contact
