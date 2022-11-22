import React from "react";
import "./index.scss";

function Navbar({ changeStateValue }) {
  // const handleClickNavbar = () => {
  //   console.log("Hello P326");
  // };

  // const { testFunc, testBye } = props;

  return (
    <>
      <h1>Navbar</h1>
      {/* <button
        onClick={() => {
          console.log("salam");
          handleClickNavbar();
        }}
      >
        Click
      </button> */}
      <button onClick={changeStateValue}>Change</button>
    </>
  );
}

export default Navbar;
