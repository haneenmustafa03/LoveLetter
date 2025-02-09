import React, { useEffect, useRef } from "react";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
import "./App.css";
import { SectionOne } from "./components/Homescreen/SectionOne.jsx";
import { SectionTwo } from "./components/Homescreen/SectionTwo.jsx";
import { SectionThree } from "./components/Homescreen/SectionThree";


function App() {
 // const particlesInit = async (main) => {
 //   await loadFull(main);
 // };
 // const particlesLoaded = (container) => {
 //   console.log(container);
 // };
 const sectionTwoRef = useRef(null);

 useEffect(() => {
  const timer = setTimeout(() => {
    if (sectionTwoRef.current) {
      sectionTwoRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, 2000);
  return () => clearTimeout(timer);
  }, []);
 return (
   <div className="screen">
     {/* Section 1 */}
     <SectionOne />
     {/* Blah blah blah */}


     {/* Section 2 */}
     <div ref={sectionTwoRef}>
     
     </div>
     <SectionTwo />


     {/* Section 3 */}
     <SectionThree />
   </div>
 );
}


export default App;






