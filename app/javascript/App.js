import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./components/header/header.component";
import WrappedMain from "./pages/main/wrapped-main.component";
import SignIn from "./pages/sign-in/sign-in.component";

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto my-3">
        <Switch>
          <Route path="/" exact component={WrappedMain} />
          <Route path="/users/sign_up" exact component={SignIn} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
