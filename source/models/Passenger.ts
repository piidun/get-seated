import { Personality } from "./Personality.js";

export type Passenger = {
  readonly name: string;
  readonly age: string;
  readonly personality: Personality;
};
