import React from "react";
import ThreeScene from './Modelos/ThreeScene';

function Pagmodel() {
  return (
    <div className="x">
    <div className="TitVisModelo"> 
    Moto Breakout 2021
    </div>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <ThreeScene/>
    </div>
    </div>
  );
}

export default Pagmodel;