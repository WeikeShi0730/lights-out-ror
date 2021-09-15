import React from "react";
import "./main.styles.scss";

import Lights from "../components/lights/lights.component";
import Header from "../components/header/header.component";

const Main = ({ clickedInside }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 main">
          <Lights clickedInside={clickedInside} />
        </div>
        <h1 className="flex justify-center">leader board</h1>
      </div>
    </React.Fragment>
  );
};

export default Main;
