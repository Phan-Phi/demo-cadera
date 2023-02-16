import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import { Logo } from "./Logo";

const LogoModel = () => {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true }}
      shadows
      camera={{ position: [0, 0, 50], fov: 40, focus: [0, 0, 0] }}
    >
      <OrbitControls makeDefault enableZoom={false} autoRotate />
      <Stage
        intensity={0.6}
        environment="city"
        shadows={{ type: "contact", bias: -0.001 }}
        adjustCamera={false}
      >
        <Logo scale={300} />
      </Stage>
    </Canvas>
  );
};

export default LogoModel;
