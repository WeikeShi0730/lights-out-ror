import React from "react";
import "./main.styles.scss";

import Lights from "../components/lights/lights.component";

const Main = ({ clickedInside }) => {
  return (
    <div className="main">
      <Lights clickedInside={clickedInside} />
    </div>
  );
};

export default Main;
