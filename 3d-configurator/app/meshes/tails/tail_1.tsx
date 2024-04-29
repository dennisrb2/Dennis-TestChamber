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

export const Tail_1 = () => {
  const mesh = useGLTF("/meshes/tail_1.glb");
  const { materials } = mesh;
  useFrame((state, delta) =>
    easing.dampC(new Color(1, 1, 1), "#00f", 0.25, delta)
  );
  return <primitive object={mesh.scene} />;
};
