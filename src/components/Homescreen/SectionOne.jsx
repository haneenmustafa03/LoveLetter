import "../HomescreenCss/SectionOne.css";
import React, { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { loadHeartShape } from "@tsparticles/shape-heart";
import { Section } from "../animations/scroll.jsx"
// import { useInView } from "react-intersection-observer";  // Import Intersection Observer hook

export const SectionOne = () => {
  const [init, setInit] = useState(false);
  // const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      try {
        await loadSlim(engine);
        await loadHeartShape(engine);
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
          value: "#ffffff",
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
          value: "#ffe6e6",
        },
        links: {
          color: "#ffe6e6",
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
          type: "heart",
        },
        size: {
          value: { min: 6, max: 10 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="Section1">
      {init ? (
        <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
      ) : (
        <p>Loading particles...</p> // Temporary text to debug if component is rendering
      )}

      <div className = "WelcomeSection">
      <h1 className="syncopate-regular"><Section>Love</Section><Section>Letter</Section></h1>
      </div>
      <div className = "AboutSection">
          <h2>
            Our Mission
          </h2>
          <h3 className = "montserrat-regular">
            Valentine’s Day is right around the corner, but for many women, it can be a time of loneliness rather than celebration. Studies show that nearly half of single women feel increased sadness or pressure during this season due to societal expectations around love and relationships. That’s why we created Love Letter—to uplift and empower women during this time. Our platform is designed to remind you that self-love is just as important as romantic love. With thoughtfully curated self-date ideas, loving journaling prompts, and self-gifting inspiration, we encourage you to make this Valentine’s Day about you!💌         
          </h3>
        </div>
    </div>
  );
};
