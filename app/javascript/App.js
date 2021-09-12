import React from "react";

import Main from "./pages/main.pages";
import ClickInside from "./components/click-inside/click-inside.component";

function App() {
  return (
    <ClickInside>
      <Main />
    </ClickInside>
  );
}

export default App;
