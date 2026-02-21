import { SimulationEvent } from "./SimulationEvent.js";

export type SimulationResult = {
  readonly score: number;
  readonly events: readonly SimulationEvent[] | null;
  readonly finalComfortLevels: readonly number[];
};
