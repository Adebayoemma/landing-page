import React from "react";
import "./boxtext.css";
import Ic from "../img/Vector.jpg";
import Pic from "../img/Rectangle 44.jpg";
import Wic from "../img/Vector (2).png";
import Wi from "../img/w.jpg";
import Fam from "../img/Frame.jpg";
import Tv from "../img/Frame (1).jpg";
import Lock from "../img/Frame (2).jpg";
import Gw from "../img/Group 27170.jpg";
import Fem from "../img/Frame (3).jpg";

function boxtext() {
  return (
    <div className="abe">
      <div className="ui-text">
        <h1>What We do</h1>
      </div>
      <div className="boxing">
        <div className="line-fist">
          <div className="small-box">
            <img src={Ic} alt="" />
            <h6>Web Design</h6>
            <p>
              From concept to launch, we create stunning, user-centric websites
              <br />
              that elevate your brand and engage your audience.
            </p>
          </div>
          <div className="small-box">
            <img src={Fam} alt="" />

            <h6>UI/UX Design</h6>
            <p>
              From concept to launch, we create <br /> stunning, user-centric
              websites <br />
              that elevate your brand and <br /> engage your audience.
            </p>
          </div>
          <div className="small-box">
            <img src={Tv} alt="" />
            <h6>Responsive Design</h6>
            <p>
              From concept to launch, we create <br /> stunning, user-centric
              websites <br />
              that elevate your brand and
              <br /> engage your audience.
            </p>
          </div>
          <div className="big-bule">
            <div className="long-box">
              <img src={Wi} alt="img" />

              <h5>E-commerce Solutions:</h5>
              <p>
                From concept to launch, we create <br /> stunning, user-centric
                websites <br />
                that elevate your brand and
                <br /> engage your audience.
              </p>
            </div>
            <div className="blu">
              <img src={Wic} alt="img" />
            </div>
          </div>

          <div className="small-box">
            <img src={Fem} alt="img" />

            <h6>Webflow</h6>
            <p>
              From concept to launch, we create <br /> stunning, user-centric
              websites <br />
              that elevate your brand and
              <br /> engage your audience.
            </p>
          </div>
        </div>
        <div className="line">
          <div className="small-img">
            <img src={Lock} alt="img" />
          </div>

          <h3>E-commerce Solutions:</h3>
          <p>
            From concept to launch, we create <br /> stunning, user-centric
            websites <br />
            that elevate your brand and <br /> engage your audience.
          </p>
          <div id="people-img">
            <img src={Pic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default boxtext;
