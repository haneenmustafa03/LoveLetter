import "../HomescreenCss/SectionOne.css";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export const SectionOne = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
        setInit(true);
      } catch (error) {
        console.error("Particles initialization failed:", error);
      }
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };


  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#f9f3dd",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#f9dce1",
        },
        links: {
          color: "#f9dce1",
          distance: 150,
          enable: true,
          opacity: 0.8,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "star",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="WelcomeSection">
      {init ? (
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      ) : (
        <p>Loading particles...</p> // Temporary text to debug if component is rendering
      )}
      <h1 className="Title">My Website</h1>
    </div>
  );
};
