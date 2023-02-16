import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function Logo(props: GroupProps) {
  const { nodes, materials } = useGLTF("/models/logo.glb");
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Curve003_1.geometry} material={materials.red} />
      <mesh geometry={nodes.Curve003_2.geometry} material={materials.gray} />
    </group>
  );
}

useGLTF.preload("/models/logo.glb");
