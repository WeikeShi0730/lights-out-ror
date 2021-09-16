import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";
import SignIn from "../../pages/sign-in/sign-in.component";

const Header = ({ history }) => {
  return (
    <Fragment>
      <h1 className="bg-red-300">header</h1>
      <button
        onClick={() => {
          history.push("/users/sign_up");
        }}
      >
        sign in
      </button>
    </Fragment>
  );
};

export default withRouter(Header);
