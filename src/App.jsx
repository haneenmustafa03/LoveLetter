import React from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import "./App.css";
import { SectionTwo } from "./components/Homescreen/SectionTwo.jsx";
import { SectionThree } from "./components/Homescreen/SectionThree";

function App() {
  // const particlesInit = async (main) => {
  //   await loadFull(main);
  // };
  // const particlesLoaded = (container) => {
  //   console.log(container);
  // };
  return (
    <div className="screen">
      {/* Section 1 */}
      {/* <SectionOne /> */}
      {/* Blah blah blah */}

      {/* Section 2 */}
      <SectionTwo />

      {/* Section 3 */}
      <SectionThree />
    </div>
  );
}


export default App;






