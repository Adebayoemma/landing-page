import React from "react";
import "./lastbar.css";
import Img from "../img/Logo.jpg";
import IG from "../img/I.G.jpg";
import TIK from "../img/tiktalk.jpg";
import BALL from "../img/ball.jpg";
import IN from "../img/ineed.jpg";
import LOVE from "../img/love.png";

function Lastbar() {
  return (
    <div className="lastbar-top">
      <div className="lastbar-item">
        <div className="logos-last-bar">
          <img src={Img} alt="" />
          <div id="page--">
            <p>
              Ready to elevate your online presence? <br /> Contact us today to
              discuss your project and discover how we can bring your vision to
              life.
            </p>
          </div>
        </div>
        <div className="lastbar-taxt">
          <img src={LOVE} ale="" />
          <div className="love--">
            <p>Made with love powered by inkyy.com</p>
          </div>
        </div>
      </div>
      <div className="lastbar-seconed">
        <button id="btn-bar">Home</button>
        <button id="btn-bar">About</button>
        <button id="btn-bar">How it Works</button>
        <button id="btn-bar">Services</button>
        <div className="last-logo">
          <div className="last-pic">
            <img src={IG} alt="" />
          </div>
          <div className="last-pic">
            <img src={TIK} alt="" />
          </div>
          <div className="last-pic">
            <img src={BALL} alt="" />
          </div>
          <div className="last-pic">
            <img src={IN} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Lastbar;
