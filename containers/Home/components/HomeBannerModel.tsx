import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";

import { Board } from "./Board";

const HomeBannerModel = () => {
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
        <Board scale={0.8} />
      </Stage>
    </Canvas>
  );
};

export default HomeBannerModel;
