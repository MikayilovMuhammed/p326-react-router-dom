import React from "react";

function About({ state, tempValue }) {
  return (
    <>
      {/* <h2>About</h2>
      <button onClick={test}>About</button> */}
      <h1>State: {state}</h1>
      <h1>Temp: {tempValue}</h1>
      <br />
    </>
  );
}

export default About;
