import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";

function App() {
  const particlesInit = async (main) => {
    await loadFull(main);
  };
  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="screen">
      {/* Section 1 */}
      <div className="WelcomeSection">
      <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "#f9dce1",
              },
            },
            particles: {
              color: {
                value: "#f9dec1",
              },
              links: {
                color: "#f9dec1",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outMode: "bounce",
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: 80,
              },
              size: {
                random: true,
                value: 3,
              },
            },
          }}
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
          <h1 className="text-5xl font-bold text-pink-500 drop-shadow-lg">
            💖 Welcome to Our Self-Love Journey! 💖
          </h1>
        </div>
      </div>

      {/* Section 2 */}
      <div className="secondSection">
        <div className="flexBox">
          <div class = "box">1</div>
          <div class = "box">2</div>
          <div class = "box">3</div>
        </div>
        
      </div>

      {/* Section 3 */}
      <div className="flex items-center justify-center h-screen bg-blue-300 text-white text-7xl font-bold">
        3
      </div>
    </div>
  );
}

export default App;

