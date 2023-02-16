import React from "react";
import { useGLTF } from "@react-three/drei";
import { GroupProps } from "@react-three/fiber";

export function BoardCTA(props: GroupProps) {
  const { nodes, materials } = useGLTF("/models/boardCTA.glb");

  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, -Math.PI / 2, 0]} scale={2.54}>
        <mesh geometry={nodes.FACE_1.geometry} material={materials["FACE_1.001"]} />
        <mesh geometry={nodes.FACE_1_1.geometry} material={materials.FACE_84} />
        <mesh geometry={nodes.FACE_1_2.geometry} material={materials.FACE_172} />
        <mesh geometry={nodes.FACE_1_3.geometry} material={materials.FACE_202} />
        <mesh geometry={nodes.FACE_1_4.geometry} material={materials.FACE_212} />
        <mesh geometry={nodes.FACE_1_5.geometry} material={materials.FACE_230} />
        <mesh geometry={nodes.FACE_1_6.geometry} material={materials.FACE_237} />
        <mesh geometry={nodes.FACE_1_7.geometry} material={materials.FACE_265} />
        <mesh geometry={nodes.FACE_1_8.geometry} material={materials.FACE_280} />
        <mesh geometry={nodes.FACE_1_9.geometry} material={materials.FACE_374} />
        <mesh geometry={nodes.FACE_1_10.geometry} material={materials.FACE_3278} />
        <mesh geometry={nodes.FACE_1_11.geometry} material={materials.FACE_3916} />
        <mesh geometry={nodes.FACE_1_12.geometry} material={materials.FACE_3918} />
        <mesh geometry={nodes.FACE_1_13.geometry} material={materials.FACE_3923} />
        <mesh geometry={nodes.FACE_1_14.geometry} material={materials.FACE_4074} />
        <mesh geometry={nodes.FACE_1_15.geometry} material={materials.FACE_4076} />
        <mesh geometry={nodes.FACE_1_16.geometry} material={materials.FACE_4743} />
        <mesh geometry={nodes.FACE_1_17.geometry} material={materials.FACE_5124} />
        <mesh geometry={nodes.FACE_1_18.geometry} material={materials.FACE_5128} />
        <mesh geometry={nodes.FACE_1_19.geometry} material={materials.FACE_5543} />
        <mesh geometry={nodes.FACE_1_20.geometry} material={materials.FACE_5545} />
        <mesh geometry={nodes.FACE_1_21.geometry} material={materials.FACE_5546} />
        <mesh geometry={nodes.FACE_1_22.geometry} material={materials.FACE_5549} />
        <mesh geometry={nodes.FACE_1_23.geometry} material={materials.FACE_1108} />
        <mesh geometry={nodes.FACE_1_24.geometry} material={materials.FACE_2874} />
        <mesh geometry={nodes.FACE_1_25.geometry} material={materials.FACE_3153} />
        <mesh geometry={nodes.FACE_1_26.geometry} material={materials.FACE_3171} />
        <mesh geometry={nodes.FACE_1_27.geometry} material={materials.FACE_3177} />
        <mesh geometry={nodes.FACE_1_28.geometry} material={materials.FACE_3532} />
        <mesh geometry={nodes.FACE_1_29.geometry} material={materials.FACE_3533} />
        <mesh geometry={nodes.FACE_1_30.geometry} material={materials.FACE_4842} />
      </group>
    </group>
  );
}

useGLTF.preload("/models/boardCTA.glb");
