import React from "react";
import "./body.css";
import Logo from "./Home-page/logo";
import UI from "./uibody/ui";
import Boxtext from "./boxtext/boxtext";
import Work from "./showbox/work";
import Team from "./team/team";
import Pric from "./pric/pric";
import Ask from "./ask/ask";
import Contant from "./contant/contant";
import Lastbar from "./last-bar/lastbar";

function App() {
  return (
    <div className="full-body">
      <Logo />
      <UI />
      <Boxtext />
      <Work />
      <Team />
      <Pric />
      <Ask />
      <Contant />
      <Lastbar />
    </div>
  );
}
export default App;
