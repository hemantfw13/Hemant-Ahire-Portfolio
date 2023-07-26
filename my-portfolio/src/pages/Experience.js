import React from "react";
import { experinece } from "../portfolio";
import Fade from "react-reveal/Fade";
import "./Experience.css";

function Experience() {
  return (
    <section className="aboutme" id="experience">
      <h1 className="title">
        <Fade bottom cascade>
         Experience
        </Fade>
      </h1>
      <div className="fluid-container">
        <div className="row">
          <Fade left cascade duration={1500}>
            <div className="col-lg-5 col-md-5 image">
              <img
                className="aboutme-img"
                height="250"
                width="250"
                src={experinece.logo}
                alt="profile pic"
              />
            </div>
          </Fade>
          <Fade bottom cascade duration={1500}>
            <div style={{color:"white"}} className="col-lg-7 col-md-7 text">
              <h2 style={{fontWeight:"700"}}>Role : {experinece.role}</h2>
              <br/>
              <h4>Duration : {experinece.time}</h4>
              <br/>
              
              <li>{experinece.p1}</li>
              <li>{experinece.p2}</li>
              <li>{experinece.p3}</li>
              <li>{experinece.p4}</li>
              <li>{experinece.p5}</li>
              <li>{experinece.p6}</li>
              <li>{experinece.p7}</li>
              <li>{experinece.p8}</li>
              <li>{experinece.p9}</li>
              <li>{experinece.p10}</li>

            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}

export default Experience;
