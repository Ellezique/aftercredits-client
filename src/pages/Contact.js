import React from 'react'
import BingMapsReact from "bingmaps-react";
import './Contact.css'

function Contact() {
  let center = { latitude: -27.468150020880756, longitude: 153.02513165952453 }
  return (
    <>
      {/* <!--CONTACT FORM--> */}
      <div className="form">
        <div className="formbox">
          <h1>Contact Form</h1>

          <form name="contact" method="post">
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



          {/* <form action="#" name="contact_form" netlify>
                  <label id="first_name">First Name</label>
                  <input name="first_name" type="text" required placeholder="First name"/>
                  <br></br>
                  <label id="last_name">Last Name</label>
                  <input name="last_name" type="text" required placeholder="Last name"/>
                  <br></br>
                  <label id="email">Email</label>
                  <input name="email" type="email" required placeholder="you@domain.com"/>
                  <br></br>
                  <label id="message">Message</label><br></br>
                  <textarea name="message" required placeholder="Enter your message here ..." cols="40" rows="20" ></textarea>
                  <div className="center">
                      <input type="submit" value="Submit"/>
                  </div>
              </form>	 */}

              
        </div>
      </div>
      {/* ADDRESS BOX */}
      <div className="addressbox">
        <h3>AfterCredits</h3>
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
    </>
  );
}

export default Contact

