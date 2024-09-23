import React from "react";
import "./contant.css";
import { Input } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/react";
function Contant() {
  return (
    <div className="value">
      <div className="touch">
        <div className="z">
          <h1>Let’s Get in Touch</h1>
        </div>

        <div className="z">
          <h5>email</h5>
          <input id="input" placeholder="example@email.com" />
        </div>
        <div className="z">
          <h5>name</h5>
          <input id="input" placeholder="full name" />

          {/* <Input
            style={{
              color: "black",
            }}
            isInvalid
            errorBorderColor="red.300"
            placeholder="example@email.com"
          /> */}
        </div>

        <div className="area">
          <h5>message</h5>
          <textarea id="textarea" placeholder="write your message...." />
          {/* <Textarea isInvalid placeholder="Here is a sample placeholder" />{" "} */}
        </div>
        <button id="btn">Get in Touch</button>
      </div>
    </div>
  );
}
export default Contant;
