import React from 'react'
import BingMapsReact from "bingmaps-react";

function Map() {
  let center = { latitude: -27.468150020880756, longitude: 153.02513165952453 }
  return (
    <div>
      <div className="physical-address">
        <h1>Physical Address</h1>
        <p>This is a student project completed for Coder Academy. If AfterCredits did exist, we would have a physical address: </p>
      </div>
      <div className="mapcontainer">
        {/* ADDRESS BOX */}
        <div className="addressbox">
          <h4>AfterCredits</h4>
          <p>(Actually Coder Academy)</p>
          <p>Level 3/116 Adelaide St,</p>
          <p>Brisbane City</p>
          <p >QLD 4000</p>
        </div>
        {/* BING MAP */}
        <div className="bingmap">
          <BingMapsReact
            bingMapsKey={process.env.REACT_APP_BING_API_KEY}
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
            pushPinsWithInfoboxes={[
              { center, metadata: { title: "AfterCredits", description: "Level 3/116 Adelaide St, <br> Brisbane City <br> QLD 4000" } }
            ]}
          ></BingMapsReact>
        </div>
      </div>
    </div>
  )
}

export default Map
