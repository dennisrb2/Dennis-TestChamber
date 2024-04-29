import { Experience } from "./Experience";
import { useState } from "react";

export interface DartConfiguration {
  tail: number;
  bodyMorph: number;
  dartColor: string;
}

export const Configurator = () => {
  const [configuration, setConfiguration] = useState<DartConfiguration>({
    tail: 1,
    bodyMorph: 0,
    dartColor: "#FFD700",
  });
  return (
    <div className="relative h-full w-full">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          padding: "20px",
        }}
      >
        <label>
          Tail:
          <select
            value={configuration.tail}
            onChange={(e) =>
              setConfiguration({
                ...configuration,
                tail: parseInt(e.target.value),
              })
            }
          >
            <option value="1">Tail 1</option>
            <option value="2">Tail 2</option>
          </select>
        </label>
        <label>
          Body Morph:
          <input
            type="range"
            min="0"
            max="100"
            value={configuration.bodyMorph}
            onChange={(e) =>
              setConfiguration({
                ...configuration,
                bodyMorph: parseInt(e.target.value),
              })
            }
          />
        </label>
        <label>
          Dart Color:
          <input
            type="color"
            value={configuration.dartColor}
            onChange={(e) =>
              setConfiguration({ ...configuration, dartColor: e.target.value })
            }
          />
        </label>
      </div>
      <Experience dartConfiguration={configuration} />
    </div>
  );
};
