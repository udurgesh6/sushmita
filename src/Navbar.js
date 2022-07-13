import React from "react";
import "./Navbar.css";

const Navbar = () => {
  let name = "Durgesh";
  let myobj = {
    key: "vale",
  };
  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <p className="navbar_ptag">I am a Navbar Component</p>
      <p>{name}</p>
    </div>
  );
};

export default Navbar;
