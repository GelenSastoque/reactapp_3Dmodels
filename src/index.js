import React from "react";
import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import Cuerpo from "./components/Cuerpo";
import Footer from "./components/Footer";
import Paginamodelo from "./components/Paginamodelo";

function App() {
  return (
    <div>
      <Navbar />
      <Cuerpo />
      <Footer />
      {/* <Paginamodelo /> */}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
