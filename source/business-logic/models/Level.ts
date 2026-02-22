import { Passenger } from "./Passenger";
import { Stage } from "./Stage";

export type Level = {
  readonly passengers: readonly Passenger[];
  readonly stage: Stage;
};
