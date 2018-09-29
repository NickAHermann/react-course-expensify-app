// Higher order component (HOC) - A component that renders another component

import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      <p>This is private info. DO NOT SHARE.</p>
      <WrappedComponent {...props} />
    </div>
  );
};

//requireAuthentication

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <p> You're authenticated!</p>
      ) : (
        <p>You arent authenticated!</p>
      )}
      {props.isAuthenticated && <WrappedComponent {...props} />}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="super secret" />,
  document.getElementById("app")
);
