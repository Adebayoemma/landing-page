import React from "react";
import "./team.css";
import Team5 from "../img/Ellipse 5.jpg";
import Team4 from "../img/Ellipse 4.jpg";
import Team3 from "../img/Ellipse 3.jpg";
import Team2 from "../img/Ellipse 2.jpg";
import Team1 from "../img/Ellipse 1.jpg";
import Star from "../img/Star 5.png";

function Team() {
  return (
    <div>
      <div className="tearm">
        <img src={Team5} alt="" />
        <img src={Team4} alt="" />
        <img src={Team3} alt="" />
        <img src={Team2} alt="" />
        <img src={Team1} alt="" />

        <div className="star-img">
          <div className="stars">
            <p>5.0 Based on 145 Reviews</p>

            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
            <img src={Star} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
