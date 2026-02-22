import { SimulationEvent } from "./SimulationEvent";

export type SimulationResult = {
  readonly score: number;
  readonly events: readonly SimulationEvent[];
  readonly finalComfortLevels: readonly number[];
};
