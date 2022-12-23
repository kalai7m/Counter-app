import React from "react";

export const NavBar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light mb-2">
      <div className="container">
        <span className="navbar-brand mb-0 h1">
          Counters{" "}
          <span className="badge badge-sm badge-primary">{props.len}</span>
        </span>
      </div>
    </nav>
  );
};
