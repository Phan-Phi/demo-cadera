import React from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function Board(props: GroupProps) {
  const { nodes, materials } = useGLTF("/models/board.gltf");

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_1902.geometry} material={materials.material_0} />
      <mesh geometry={nodes.Object_1902_1.geometry} material={materials.material_24} />
      <mesh geometry={nodes.Object_1902_2.geometry} material={materials.material_25} />
      <mesh geometry={nodes.Object_1902_3.geometry} material={materials.material_26} />
      <mesh geometry={nodes.Object_1902_4.geometry} material={materials.material_27} />
      <mesh geometry={nodes.Object_1902_5.geometry} material={materials.material_7} />
      <mesh geometry={nodes.Object_1902_6.geometry} material={materials.material_8} />
      <mesh geometry={nodes.Object_1902_7.geometry} material={materials.material_5} />
      <mesh geometry={nodes.Object_1902_8.geometry} material={materials.material_6} />
      <mesh geometry={nodes.Object_1902_9.geometry} material={materials.material_2} />
      <mesh geometry={nodes.Object_1902_10.geometry} material={materials.material_3} />
      <mesh geometry={nodes.Object_1902_11.geometry} material={materials.material_4} />
      <mesh geometry={nodes.Object_1902_12.geometry} material={materials.material_1} />
      <mesh geometry={nodes.Object_1902_13.geometry} material={materials.material_9} />
      <mesh geometry={nodes.Object_1902_14.geometry} material={materials.material_10} />
      <mesh geometry={nodes.Object_1902_15.geometry} material={materials.material_11} />
      <mesh geometry={nodes.Object_1902_16.geometry} material={materials.material_12} />
      <mesh geometry={nodes.Object_1902_17.geometry} material={materials.material_13} />
      <mesh geometry={nodes.Object_1902_18.geometry} material={materials.material_14} />
      <mesh geometry={nodes.Object_1902_19.geometry} material={materials.material_17} />
      <mesh geometry={nodes.Object_1902_20.geometry} material={materials.material_19} />
      <mesh geometry={nodes.Object_1902_21.geometry} material={materials.material_20} />
    </group>
  );
}

useGLTF.preload("/models/board.gltf");
