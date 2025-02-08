import "../HomescreenCss/SectionOne.css";
export const SectionOne = () => {
    return (
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
    )
}