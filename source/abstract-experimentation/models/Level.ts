import { Passenger } from "./Passenger.js";
import { Stage } from "./Stage.js";

export type Level = {
  readonly passengers: readonly Passenger[];
  readonly stage: Stage;
};
