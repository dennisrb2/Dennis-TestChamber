import { Environment, OrbitControls, ContactShadows } from "@react-three/drei";
import { Body_1 } from "~/meshes/bodies/body_1";
import { Tip_1 } from "~/meshes/tips/tip_1";
import { Tail_1, Tail_2 } from "~/meshes/tails";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import type { DartConfiguration } from "./Configurator";
//@ts-ignore
const apartment = import("@pmndrs/assets/hdri/apartment.exr").then(
  (module) => module.default
);

export const Experience = ({ dartConfiguration }) => {
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: 50,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
          }}
        >
          Loading...
        </div>
      }
    >
      <Canvas
        shadows
        camera={{ position: [5, 2, 0], fov: 25 }}
        frameloop="demand"
      >
        <Environment blur={0} preset="warehouse" />
        <ambientLight intensity={1} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.15}
          penumbra={1}
          shadow-mapSize={2048}
          castShadow
        />
        <Tip_1 />
        <Body_1
          morph={dartConfiguration.bodyMorph}
          color={dartConfiguration.dartColor}
        />
        {dartConfiguration.tail === 1 ? <Tail_1 /> : <Tail_2 />}
        <OrbitControls />
        <ContactShadows scale={10} position={[0, -0.33, 0]} opacity={0.2} />
      </Canvas>
    </Suspense>
  );
};
