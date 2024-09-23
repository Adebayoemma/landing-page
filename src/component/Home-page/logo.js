import React from "react";
import Button from "@mui/material/Button";
import "./logo.css";
import Img from "../img/Logo.jpg";
function Logo() {
  return (
    <div className="top">
      <div className="logos">
        <img src={Img} alt="" />
      </div>

      <div className="my-btn">
        <button>Home</button>
        <button>About</button>
        <button>How it work</button>
        <button>Services</button>
      </div>

      <div className="sign">
        <Button
          variant="text"
          style={{
            color: "white",
          }}
        >
          sign in
        </Button>

        <Button
          variant="contained"
          style={{
            borderRadius: 7.86,
          }}
        >
          sign up
        </Button>
      </div>
    </div>
  );
}

export default Logo;
