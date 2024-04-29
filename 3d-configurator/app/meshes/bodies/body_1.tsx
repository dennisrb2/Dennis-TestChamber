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
import { MeshStandardMaterial, Color, Mesh } from "three";

export const Body_1 = ({ color, morph }: { color: string; morph: number }) => {
  const normalizedMorph = Math.min(Math.max(morph / 100, 0), 1);
  const { nodes } = useGLTF("/meshes/body_1.glb");
  const goldMaterial = new MeshStandardMaterial({
    color: new Color(color),
    roughness: 0.1,
    metalness: 1,
  });
  const mesh = nodes.dart_body as Mesh;
  // console.log(nodes);

  return (
    <group dispose={null}>
      <primitive
        material={goldMaterial}
        morphTargetInfluences={[normalizedMorph]}
        object={mesh}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
};
