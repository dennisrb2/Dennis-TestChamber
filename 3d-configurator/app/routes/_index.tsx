import type { MetaFunction } from "@remix-run/node";
import { Configurator } from "~/components/Configurator";

export const meta: MetaFunction = () => {
  return [
    { title: "3D Configurator Demo" },
    { name: "description", content: "Just a test with a 3D configurator" },
  ];
};

export default function Index() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">3D Product Configurator</h1>
      <div className="w-full p-4 shadow-lg h-screen bg-white">
        <Configurator />
      </div>
    </div>
  );
}
