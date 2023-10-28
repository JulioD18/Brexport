import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import Box from "@mui/material/Box";
import { Divider, Typography } from "@mui/material";
import "../../styles/background.css";
import { TypeAnimation } from "react-type-animation";

export default function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(
    async (container: Container | undefined) => {
      await console.log(container);
    },
    []
  );
  return (
    <Box
      id="tsparticles-container"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="90vh"
      position="relative"
      overflow={"hidden"}
    >
      <Particles
        id="tsparticles"
        className="particle"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "transparent",
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
              resize: true,
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
              value: "#000",
            },
            links: {
              color: "#000",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <Box
        position="absolute"
        textAlign="center"
        bgcolor="rgb(0, 0, 0, 0.5)"
        width="90%"
        border={"1px solid #fff"}
        padding={5}
        borderRadius="10px"
      >
        <Box
          maxWidth="70%" // Limit the maximum width of the title container
          display="inline-block"
        >
          <Typography variant="h2" style={{ color: "#fff" }}>
            <TypeAnimation
              cursor={false}
              sequence={[1000, "BREXPORT"]}
              wrapper="span"
              repeat={1}
              speed={1}
            />
          </Typography>
          <Divider />
          <Typography mt={2} variant="h5" style={{ color: "#fff" }}>
            <TypeAnimation
              cursor={false}
              sequence={[2000, "For Soccer Lovers, By Soccer Lovers!"]}
              wrapper="span"
              repeat={1}
              speed={1}
            />
          </Typography>
          <Typography mt={2} variant="h5" style={{ color: "#fff" }}>
            <TypeAnimation
              cursor={false}
              sequence={[6000, "Soccer Stories and Friends Await You!"]}
              wrapper="span"
              repeat={1}
              speed={1}
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
