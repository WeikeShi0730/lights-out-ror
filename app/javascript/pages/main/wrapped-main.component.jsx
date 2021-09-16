import React from "react";
import ClickInside from "../../components/click-inside/click-inside.component";
import Main from "./main.component";

const WrappedMain = () => {
  return (
    <ClickInside>
      <Main />
    </ClickInside>
  );
};

export default WrappedMain;
