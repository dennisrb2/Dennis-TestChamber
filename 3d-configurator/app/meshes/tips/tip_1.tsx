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
import { Color, MeshStandardMaterial } from "three";

export const Tip_1 = () => {
  const mesh = useGLTF("/meshes/tip_1.glb");
  const goldMaterial = new MeshStandardMaterial({
    color: new Color(0.3, 0.3, 0.3),
    roughness: 0,
    metalness: 1,
  });
  return <primitive object={mesh.scene} material={goldMaterial} />;
};
