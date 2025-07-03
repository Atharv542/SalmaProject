// components/ParticlesBackground.jsx
import React from "react";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import Particles from "react-tsparticles";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "#105153",
          },
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          opacity: {
            value: 0.2,
          },
          size: {
            value: 4,
            random: true,
          },
          move: {
            enable: true,
            speed: 0.6,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
        },
      }}
      className="absolute inset-0 z-0"
    />
  );
};

export default ParticlesBackground;
