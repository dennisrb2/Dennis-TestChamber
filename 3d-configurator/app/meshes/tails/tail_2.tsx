import {
  useGLTF,
  useTexture,
  AccumulativeShadows,
  RandomizedLight,
  Decal,
  Environment,
  Center,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { Color } from "three";

export const Tail_2 = () => {
  const mesh = useGLTF("/meshes/tail_2.glb");
  const { materials } = mesh;
  useFrame((state, delta) =>
    easing.dampC(new Color(1, 1, 1), "#f0f", 0.25, delta)
  );
  return <primitive object={mesh.scene} />;
};
