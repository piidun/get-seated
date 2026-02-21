import { SimulationEvent } from "./SimulationEvent.js";

export type SimulationResult = {
  readonly score: number;
  readonly events: readonly SimulationEvent[];
  readonly finalComfortLevels: readonly number[];
};
