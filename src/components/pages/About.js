import React from "react";

import './About.css'


function About() {
  return (
    <>
      <div className="mainDiv ">
        <div className="description ">
          <h2 className=" aboutheading "> About Our Company</h2>
          <span className="">
           <span className="medium"> How To Works</span> <span className="medium">| </span>
          </span>
          <span >
             <span className="medium">With Us</span>
          </span><br />

          <p className="text">
          We strive to provide the best and most convenient car repair and maintenance services with enthusiasm, integrity and professionalism.

The main services offered in the workshop include:
<ul>
<li>	Scheduled Full Service</li>
<li>	Heating and Air Conditioning Service and Repairs</li>
<li>	Electrical Repair</li>
<li>	Engine and Transmission Services and Repair</li>
<li>	Electronic Ignition and Fuel Injection System Diagnose and Repair</li>
We also have:
<li>	ADNOC Vehicle Passing Test & Registration Card Renewal Facility</li>
<li>	Body Work & Painting</li>
<li>	Window Tinting</li>
<li>	Interior Detailing</li>
</ul>
WHY US?
Our workshop offers a unique customer experience that focuses on providing the highest quality of services in auto repair and maintenance. Aside from the quality services we offer, our garage operates based on the mottos of hard work, integrity and professionalism. The staff is experienced in repairing all types of vehicles with a specialization in the repair and maintenance 4X4 vehicles. One of the services designed to improve the customer experience is that we offer a home pick-up and delivery when desired.
          </p><div className="btn">
        <a href="/Services"> Services ...</a>
        </div>
        </div>
        
       
      </div> 
    </>
  );
}

export default About;
