import React from "react";
import "./work.css";
import Img from "../img/pagework.jpg";
import Left from "../img/left.jpg";
import Right from "../img/right.jpg";

function work() {
  return (
    <div className="page-work">
      <div className="arow">
        <div></div>
        <h1>Check our Work</h1>
        <div></div>
      </div>

      <p>
        Take a look at some of our recent projects to see how we've helped
        <br />
        businesses like yours succeed online.
      </p>

      <div className="work">
        <div className="work-page">
          <img src={Left} alt="page" />
        </div>

        <div className="img-work">
          <img src={Img} alt="page" />
        </div>

        <div className="work-page">
          <img src={Right} alt="page" />
        </div>
      </div>
    </div>
  );
}

export default work;
