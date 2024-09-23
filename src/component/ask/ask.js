import React from "react";
import "./ask.css";

function ask() {
  return (
    <div className="ask-body">
      {/* <div className="mon"> */}
      <div className="text-filed">
        <h1>
          Frequently <br /> Asked <br />
          Questions
        </h1>
      </div>
      {/* </div> */}
      {/* <div className="start"> */}
      <div className="text-filed-i">
        <div className="ist-ask">
          <p>
            <h4>How can I contact Inkyy Team?</h4>
            You can reach us through our contact form on our website or by
            emailing us at hello@inkyy.com We typically respond within 24 hours.
          </p>
        </div>
        <div className="seacon-ask">
          <h3>What services do you offer?</h3>
        </div>
        <div className="seacon-ask">
          <h3>Do you provide website maintenance services? </h3>
        </div>
        <div className="seacon-ask">
          <h3> How long does it take to design and develop a website? </h3>
        </div>
        <div className="seacon-ask">
          <h3>Do you require a deposit for projects? </h3>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default ask;
