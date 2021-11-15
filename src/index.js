import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Cuerpo from "./components/Cuerpo";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Cuerpo />
      <Footer />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
