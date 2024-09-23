import React from "react";
import "./pric.css";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
// import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function Pric() {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div>
      <div className="pricing">
        <div className="page-">
          <h1>Pricing</h1>

          <p>
            Take a look at some of our recent projects <br />
            to see how we've helped businesses like
            <br />
            yours succeed online.
          </p>
          <div className="meeting">
            <h3>
              Let's Schedule <br /> a Meeting
            </h3>

            <Button
              variant="contained"
              style={{
                background: "#4E47FF",
              }}
            >
              Schedule Meetings
            </Button>
          </div>
        </div>
        <div className="pricing-">
          <h2>Unlimited Services</h2>
          <p>
            Take a look at some of our recent projects to see how <br /> we've
            helped businesses like yours succeed online.
            <div className="checkbox">
              {/* <Checkbox {...label} defaultChecked label="Label" /> */}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Unlimited requests"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Unlimited requests"
              />
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Unlimited requests"
              />{" "}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Unlimited requests"
              />{" "}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Unlimited requests"
              />{" "}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Unlimited requests"
              />{" "}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Unlimited requests"
              />{" "}
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Unlimited requests"
              />
            </div>
            <div className="num">
              <h1>$3,250</h1>
              <h5>/mo</h5>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pric;
